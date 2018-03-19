import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: []
		}
	}

	render() {
		return (
			<div className="container App" >
				<h1 className="text-center title">Recipe Box</h1>
				<div>
					<form>
						<div class="form-group">
							<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Recipe Name"></input>
						</div>
						<div class="form-group">
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Ingredients"></textarea>
						</div>
					</form>
				</div>

				<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
					Add Recipe
</button>
				
			</div>
		);
	}
}

class RecipeItem extends Component {

	render() {
		return (
			<div className="recipe-item">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h5 className="mb-0">
							<a href="" data-toggle="collapse" data-target={"#" + this.props.number} aria-expanded="true" aria-controls={this.props.number}>
								Collapsible Group Item #1
						  </a>
						</h5>
					</div>

					<div id={this.props.number} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
						<div className="card-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							<div className="btn-toolbar">
								<button type="button" className="btn btn-danger delete" data-dismiss="modal">Delete</button>
								<button type="button" className="btn btn-primary edit" data-dismiss="modal">Edit</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}



export default App;
