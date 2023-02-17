function Filter(props) {
    const {changeFilter} = props;

    const handleChange = (event) =>{
        changeFilter(event.target.id);
    }

    return (
        <div>
            <label>
                <input id='1' name="group1" type="radio" checked onChange={handleChange}/>
                <span>Все</span>
            </label>
            <label>
                <input id='2' name="group1" type="radio"  onChange={handleChange}/>
                <span>Фильмы</span>
            </label>
            <label>
                {/* <input class="with-gap" name="group1" type="radio" /> */}
                <input id='3' name="group1" type="radio"  onChange={handleChange}/>
                <span>Сериалы</span>
            </label>
        </div>
    )
}

export { Filter }