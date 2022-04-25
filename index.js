import express from 'express'; // import express
import cors from 'cors'; // import cors

const app = express();
app.use(express.json()); 
app.use(cors()); // enable cors

let tweets = [];
let users = [];
let userAvatar;

app.post('/sign-up', (req, res) => {
	const bory = req.body;
	console.log("body do login", bory);

	const userData = {
		username: bory.username,
		avatar: bory.avatar,
	}
	userAvatar = userData.avatar;

	users.push(userData);
	res.send("OK");
	console.log("users", users);
});

app.post('/tweets', (req, res) => {
	const bory = req.body;
	console.log("body do tweet", bory);

	const tweetData = {
		username: bory.username,
		avatar: userAvatar,
		tweet: bory.tweet
	}

	tweets.push(tweetData);
    res.send("OK");
	console.log("tweets", tweets);
});

app.get('/tweets', (req, res) => {
	let newTweets = tweets.slice(-10);
	res.send(newTweets.reverse());
});

app.listen(5000); // listen on port 5000