import React from "react";
import { Card } from "react-bootstrap";

function userList({ data }) {
	return (
		<div className="cards">
			<div className="card">
				<Card>
					<Card.Img
						variant="top"
						src="https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/draven-bug-illaoi-league-of-legends-kleptomancy.jpg"
					/>
					<Card.Body>
						<Card.Title>Name: {data.name}</Card.Title>
						<Card.Text>username: {data.username}</Card.Text>
						<Card.Text>email: {data.email}</Card.Text>
						<Card.Text>phone: {data.phone}</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default userList;
