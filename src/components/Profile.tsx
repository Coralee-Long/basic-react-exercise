import profilePic from "../assets/images/profile.png"

export const Profile = () => {


    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={profilePic} alt="Profile"/>
            </div>
            <div className="profile-text">
                <h1 className="profile-heading">About Me</h1>
                <p>
                    I'm baby jianbing forage lumbersexual, you probably haven't heard of them 90's Brooklyn tbh.
                    Sartorial meditation aesthetic banjo YOLO fam austin hoodie retro synth kale chips. Same fixie next
                    level lyft, jean shorts butcher mumblecore craft beer iPhone deep v kombucha vexillologist
                    dreamcatcher big mood gatekeep. Food truck disrupt cronut, butcher try-hard air plant cloud bread
                    pork belly tilde etsy iceland dreamcatcher fit.
                </p>
                <p>
                    Swag gochujang umami JOMO artisan sus blog next level fit freegan cloud bread microdosing PBR&B.
                    Flexitarian ramps pinterest af aesthetic 8-bit edison bulb fam messenger bag vape hoodie fashion axe
                    heirloom. Cloud bread selvage live-edge, chicharrones cardigan iPhone yr viral heirloom deep v
                    whatever cold-pressed listicle cred raclette. Vexillologist humblebrag grailed pour-over enamel pin
                    offal austin.
                </p>
                <p className="lorem-link">
                    Lorem Ipsum text was generated using <a
                    href="https://hipsum.co/" target="_blank"
                    rel="noopener noreferrer">Hipster Ipsum</a>.
                </p>
            </div>
        </div>
    )
}



