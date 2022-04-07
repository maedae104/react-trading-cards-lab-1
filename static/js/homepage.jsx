'use strict';

function Homepage() {
  return (
        <div> 
            <p>We're so happy you're here!</p>
            <a href="/cards">Go to the cards page</a>
            <img src="/static/img/balloonicorn.jpg" />
        </div>
        );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
