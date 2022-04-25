import express from 'express'; // import express
import cors from 'cors'; // import cors

const app = express();
app.use(express.json()); 
app.use(cors()); // enable cors

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
	}
];
const users = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
	}
];

app.post('/sign-up', (req, res) => {
	const bory = req.body;
	console.log("body do login", bory);

	const userData = {
		username: bory.username,
		avatar: bory.avatar,
	}
	console.log("userData", userData);

	users.push(userData);
	res.send("OK");
});

app.post('/tweets', (req, res) => {
	const bory = req.body;
	console.log("body do tweet", bory);

	const tweetData = {
		username: bory.username,
		tweet: bory.tweet
	}

	tweets.push(tweetData);
    res.send("OK");
});

app.get('/tweets', (req, res) => {
	res.send(tweets);
});

app.listen(5000); // listen on port 5000