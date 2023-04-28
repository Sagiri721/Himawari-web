import { useEffect, useState } from "react";
import { Delete, GetUserById, Insert, Record, Update, getLoginData } from "../utils/CommonFunctions";
import { faUpDown, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const login = getLoginData();

function Forum() {
    
    const [open, setOpen] = useState("");
    const [questionList, setList] = useState([]);

    useEffect(() => {

        async function get(q){

            //Fetch questions
            const data = await Record("question", q == undefined ? {} : {id: q});
            setList(data);
        }

        get(new URLSearchParams(window.location.search).get("question"));

    }, [questionList])
    
    if(new URLSearchParams(window.location.search).get("question") != undefined){

        return(
            <div>
                <h1>Forum</h1>
                <div className="question">
                    <button onClick={(event) => {

                        event.preventDefault();

                        let myId = getLoginData()._id;
                        const question = questionList[0];

                        if(questionList[0].upvotes.includes(myId)) question.upvotes.splice(question.upvotes.indexOf(myId), 1);
                        else question.upvotes.push(myId);
  
                        //Update database
                        Update("question", {"title": questionList[0].title}, {$set: {"upvotes": questionList[0].upvotes}});

                        setList([question]);

                    }} className="smallbtn2" type="button">👍 {questionList[0].upvotes.length}</button>
                    <img src={"user_images/" + questionList[0].uploader + ".webp"} alt={questionList[0].uploader + ".profile-picture"} className="child" />
                    <span className="child">
                        <p><strong className="big">{questionList[0].title}</strong> asked by <strong>{questionList[0].username}</strong> at {questionList[0].date}</p>
                    </span>        
                    <p>
                        {questionList[0].contents}
                    </p>
                </div>

                <hr />
                <br />
                <h2>Know the answer?</h2>
                <input type="text" maxLength={500} name="" id="answer" placeholder="Leave an answer" />
                <button onClick={() => {

                    let answers = questionList[0].answers;
                    answers.push(
                        {
                            "uploader": login._id,
                            "contents": document.getElementById("answer").value,
                            "date": new Date().toDateString(),
                        }
                    );

                    Update("question", { "title": questionList[0].title }, { $set: { "answers": answers} });
                    alert("Answer sent");

                    document.getElementById("answer").value = "";

                }} className="smallbtn">Submit</button>

                {
                    questionList[0].answers.map(x =>
                        <AnswerLayout
                            contents={x.contents} 
                            uploader={x.uploader} 
                            date={x.date}
                        />)
                }

            </div>
        );
    }else{
    
        const change = () => {
    
            if(open===""){
    
                setOpen(
                    <form>
                        <h2>Ask a question</h2>
                        <input type="text" placeholder="Your question here" id="q-title" />
                        <textarea type="text" placeholder="Details" rows={20} id="q-contents" />
                        <button type="button" onClick={ask}>Publish question</button>
                    </form>
                );
            }else {
    
                setOpen("");
            }
        }
    
        const ask = ()=> {

            const data = {
                uploader: login._id,
                date: new Date().toDateString(),
                title: document.getElementById("q-title").value,
                contents: document.getElementById("q-contents").value,
                upvotes: [],
                answers: [],
            }
    
            Insert("question", data);
            setOpen("");
            alert("Question was asked!");
        }

        return (
            <div>
                <h1>Forum</h1>

                <hr />
                <button className="smallbtn" onClick={change}>Ask a question</button>
                <div className="question-form">
                
                {open}

            </div>
                <br />

                {
                    questionList.map(question => (<span>
                        <QuestionLayout 
                            id={question._id}
                            title={question.title} 
                            contents={question.contents} 
                            uploader={question.uploader} 
                            date={question.date}
                            ans={question.answers.length}
                            score={question.upvotes}
                        /> 
                        <br /></span>)).reverse()
                }
            </div>
        );
    }
}

const QuestionLayout = (props) => {

    const [user, setUser] = useState({});
    const nav = useNavigate();

    useEffect(() => {

        GetUserById(props.uploader).then((response) => {

            setUser(response);
        });
    }, []);

    const readmore = () => {

        nav("?question=" + props.id);
    }

    const deleteThis = () => {

        Delete("question", props.id).then(() => {

            alert("Question deleted");
        });
    }

    const button = props.uploader == login._id ? <button onClick={deleteThis}>Delete</button> : "";

    return(
        <div className="question">
            <img src={"user_images/" + props.uploader + ".webp"} alt={props.uploader + ".profile-picture"} className="child" />
            <span className="child">
                <p><strong className="big">{props.title}</strong> asked by <strong>{user.username}</strong> at {props.date}</p>
            </span>        
            <p>
                { props.contents.length > 500 ? props.contents.substring(0, 493) + "..." : props.contents }
            </p>

            <br />
            <p><strong>{props.ans} answers</strong><br />{props.score.length} <FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon></p>

            <br />
            <button onClick={readmore}>Read more</button>
            {button}
        </div>
    );
}

const AnswerLayout = (props) => {

    const [user, setUser] = useState({});

    useEffect(() => {

        GetUserById(props.uploader).then((response) => {

            setUser(response);
        });
    }, []);

    return(
        <div className="question">
            <img src={"user_images/" + props.uploader + ".webp"} alt={props.uploader + ".profile-picture"} className="child" />
            <span className="child">
                <p><strong className="big">{user.username}</strong> at {props.date}</p>
            </span>        
            <p>
                { props.contents.length > 500 ? props.contents.substring(0, 493) + "..." : props.contents }
            </p>

            <br />

            <br />
        </div>
    );
}

export default Forum;