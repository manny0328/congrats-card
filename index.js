const element = (
    // Write your code here.
    <div className = "bg-container">
        <h1 className = "main-heading">congratulations </h1>
        <div className = "card-container">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
            <h1 className="heading">User 1</h1>
            <p className="Paragraph">
                User.One Institute of Computer Education and technology Hyderabad.
            </p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))