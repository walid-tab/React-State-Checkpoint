import React from "react";
class Profile extends React.Component {
    constructor() {
        super();
        
        this.state={
            fullName : "Walid Tabbabi",
            Bio :"Try Again",
            Profession:"full stack JS developer",
            image :"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",

            

        }
    }

   
    render() { 
        return ( 
            <div>
            
            <p className='title'>Profil</p>
            <img className="imgProfil" src={this.state.image} alt="Pic De Profil"/>
            <p className="profil name">FullName :{this.state.fullName}</p> 
            <p className="profil bio">Bio :{this.state.Bio}</p>
            <p className="profil prof">Profession :{this.state.Profession}</p>
            </div>
         );
    }
}
 
export default Profile;