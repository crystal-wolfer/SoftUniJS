module.exports= `
    <li>
        <img src="{{imgUrl}}" alt="{{catName}}">
        <h3>{{catName}}</h3>
        <p><span>Breed: </span>{{breed}}</p>
        <p><span>Description: </span>{{description}}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>
`