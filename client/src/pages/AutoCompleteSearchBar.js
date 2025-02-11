import { useEffect, useState } from "react";

export default function AutoCompleteSearchBar() {
    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({});
    const fetchData = async () => {
        if (cache[input]) {
            console.log("Cache retuned", input);
            setRecipes(cache[input]);
            return;
        }
        console.log("API call", input);
        const data = await fetch('https://dummyjson.com/recipes/search?q=' + input);
        const json = await data.json();
        // console.log(json.recipes);
        setRecipes(json?.recipes);
        setCache((prev) => ({ ...prev, [input]: json?.recipes }));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 300)
        return () => {
            clearTimeout(timer);
        }

    }, [input])

    return (<div>
        <main>
            <h1>Autocomplete Search Bar</h1>
            <input value={input}
                onChange={(e) => { setInput(e.target.value) }}
                onFocus={() => setShowResults(true)}
                onBlur={() => setShowResults(false)}
            />
            {showResults && (
                <div className='recipe-result'>
                    {
                        recipes.map((val) => <li className='recipe-list' key={val.id}>{val.name}</li>)
                    }
                </div>
            )}
        </main>
    </div>)
}


