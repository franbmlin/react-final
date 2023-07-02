import React from "react";
import { Stack, Card, Image } from "react-bootstrap";
import './About.css';

function About() {
    return (
        <Stack direction="horizontal">
            <Image style={{ height: "100%", padding: '18px' }} src="https://images.unsplash.com/photo-1453078977505-10c3e375c2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWF0dXJpbmclMjBjaGVlc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
            <Card className="card" border="light">
                <h2>Welcome to Azienda Salumiera!</h2>
                <p>Everyone loves the big cheese say cheese hard cheese cut the cheese cheese on toast chalk and cheese who moved my cheese mozzarella mascarpone , bavarian bergkase queso melted cheese babybel cheesy grin camembert de normandie goat emmental. Taleggio red leicester cheesy grin bavarian bergkase everyone loves danish fontina feta boursin babybel macaroni cheese, lancashire cream cheese croque monsieur  parmesan camembert de normandie cheese strings fromage frais queso, cheese triangles cheeseburger airedale paneer fromage cow cheese and biscuits blue castello. Cheesecake cheese triangles dolcelatte mascarpone manchego pecorino monterey jack macaroni cheese cheesy grin everyone loves, the big cheese bocconcini chalk and cheese cheese and biscuits fondue jarlsberg fromage frais cheeseburger fromage, queso parmesan cheese on toast who moved my cheese cheesy feet lancashire emmental cow. Cheesy grin cheeseburger mozzarella everyone loves cheese and wine fondue pecorino taleggio cottage cheese lancashire, monterey jack emmental cauliflower cheese chalk and cheese blue castello bocconcini fromage frais. Cheese triangles the big cheese airedale cheese strings who moved my cheese gouda cheesecake manchego boursin parmesan everyone loves, hard cheese cheesy grin cut the cheese lancashire bocconcini st. agur blue cheese cheese slices ricotta cottage cheese red leicester when the cheese comes out everybody's happy, camembert de normandie goat croque monsieur fromage frais cheddar rubber cheese cheesy feet melted cheese fondue.</p>
            </Card>
        </Stack>
    )
}

export default About;