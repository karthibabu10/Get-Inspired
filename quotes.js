import React, {useState, useEffect} from 'react';
const Quotes = ()=>{
    const[quote, setquote] = useState('title');
    const [author,setauthor] = useState('');
    useEffect(() =>{
        getquote()
    },[])
}
const getquote = () =>{
    let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuotes = dataQuotes[randomNum];
        setquote(randomQuotes.quote);
        setauthor(randomQuotes.author);


    })




}
const handleClick = () =>{
    getquote()
}