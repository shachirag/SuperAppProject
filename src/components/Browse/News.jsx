import { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  console.log(news);
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2023-04-19&to=2023-04-19&sortBy=popularity&apiKey=768ec85c8af64fc8a71f2633798b51e4"
      )
        .then(async (data) => await data.json())
        .then((res) => {
          if (res.articles && res.articles.length > 0) {
            setNews(res.articles[0]);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchNews();
  }, []);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  }, []);
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  }, []);
  return (
    <div className="news-container">
      {news.urlToImage && (
        <img src={news.urlToImage} className="news-image" alt="" />
      )}
      <div className="news-description">{news.description}</div>
      <div className="news-details">
        <p className="news-title">{news.title}</p>
        <span className="news-date">{date}</span>
        <span className="news-date">{time}</span>
      </div>
    </div>
  );
};

export default News;
