import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";
//create your first component
const Home = () => {
	return (
		<><Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-12 col-sm-6 col-md-3 d-flex">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet molestie laoreet.
							Nulla finibus diam nec lacinia gravida. Pellentesque non mi ac velit vehicula vehicula id nec augue.
							Nunc sodales mi ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
							label="Find Out More!"
							imageUrl="https://www.codewithfaraz.com/tools/placeholder?size=500x300"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 d-flex">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet molestie laoreet.
							Nulla finibus diam nec lacinia gravida. Pellentesque non mi ac velit vehicula vehicula id nec augue.
							Nunc sodales mi ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
							label="Find Out More!"
							imageUrl="https://www.codewithfaraz.com/tools/placeholder?size=500x300"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 d-flex">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet molestie laoreet.
							Nulla finibus diam nec lacinia gravida. Pellentesque non mi ac velit vehicula vehicula id nec augue.
							Nunc sodales mi ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
							label="Find Out More!"
							imageUrl="https://www.codewithfaraz.com/tools/placeholder?size=500x300"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 d-flex">
						<Card
							title="Card Title"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet molestie laoreet.
							Nulla finibus diam nec lacinia gravida. Pellentesque non mi ac velit vehicula vehicula id nec augue.
							Nunc sodales mi ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
							label="Find Out More!"
							imageUrl="https://www.codewithfaraz.com/tools/placeholder?size=500x300"
						/>
					</div>
				</div>
			</div>
			<Footer
			webName="Your Website"
			year="2025"
			/>
		</>
	);
};

export default Home;