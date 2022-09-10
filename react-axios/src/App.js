import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [pagination, setPagination] = useState([]);

    const onChange = e => {
        setSearch(e.target.value);
    };

    const onClick = async (page = 1) => {
        const resp = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${search}&page=${page}`);
        setList(resp.data.results);

        var pages = [];
        for (let i = 0; i < resp.data.total_pages; i++) {
            pages = [...pages, i + 1];
        }
        setPagination(pages);
        setPage(page);
    };

    return (
        <div className="App">
            <form>
                <input type="text" value={search} onChange={onChange} />
                <button type="button" id="search" onClick={() => onClick(1)}>
                    Search
                </button>
            </form>
            <div id="list">
                {list.map(item => (
                    <div className="item" key={item.id}>
                        <img className="poster" src={item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : require("./no-image.jpg")} />
                        <h2 className="title">{item.original_name}</h2>
                        <div className="overview">{item.overview}</div>
                        <img class="flag" src={"https://countryflagsapi.com/svg/" + item.origin_country[0]} />
                    </div>
                ))}
            </div>
            <div id="pagination">
                {pagination.map(item => (
                    <span
                        className={`page ${page == item ? "active" : ""}`}
                        key={item}
                        onClick={() => {
                            onClick(item);
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default App;
