import React from "react";


class App extends React.Component {


    state = {
        name: "Aremen",
        book: ["JS", "REact/Angular", "Vue", "Node"],
    }


 updateName=()=>{
//  this.setState({name:"Gexam"})
this.setState(current=>{
    current.name="Gexam";
return current;
})

        }



    render() {
        return (

            <div>
                <h1>Hello my name is {this.state.name}</h1>

                <p>Thesw are the titles of my books</p>

                <ul>

                    {
                        this.state.book.map((elm,index) => {
                            return <li key={index}>{elm}</li>
                        })
                    }


                </ul>

                <button onClick={this.updateName}>Chang name</button>
            </div>
        )

    }

}


export default App;


import React from "react";

class App extends React.Component {
    state = {
        name: "Aremen",
        allSkills: ["HTML", "CSS", "JavaScript", "React", "Angular"],
        skills: [],
    };

    addRandomSkill = () => {
        // Get a random skill
        const randomSkill = this.state.allSkills[Math.floor(Math.random() * this.state.allSkills.length)];
        
        // Add it to skills if it's not already included
        if (!this.state.skills.includes(randomSkill)) {
            this.setState(prevState => ({
                skills: [...prevState.skills, randomSkill],
            }));
        }
    };

    updateName = () => {
        this.setState({ name: "Gexam" });
    };

    render() {
        return (
            <div>
                <h1>Hello my name is {this.state.name}</h1>
                <p>These are my skills:</p>
                <ul>
                    {this.state.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <button onClick={this.addRandomSkill}>Add Skill</button>
                <button onClick={this.updateName}>Change Name</button>
            </div>
        );
    }
}

export default App;
