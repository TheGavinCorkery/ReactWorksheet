import React from 'react'

const SuperheroTable = (props) => {
    return ( 
        <div>
            <h1>Superheroes!</h1>
            <table>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
                {props.heroes.map((hero) => {
                    return <tr align = "center"><td>{hero.name}</td><td>{hero.primaryAbility}</td><td>{hero.secondaryAbility}</td></tr>
                })}
            </table>
        </div>
     );
}
 
export default SuperheroTable;