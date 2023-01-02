import './header.css'
function Header(){
    return (
        <div className="card-header">
            <div>
                <img src = 'alex-fxrwJGMCz_g-unsplash.jpg' width={600} height={410} alt = 'jjj'/>
                
                <p>The universe's first stars ignited some 180 million years after the big bang, the explosive moment 13.8 billion years ago that marks the origins of the universe as we know it. Gravity had sculpted the first galaxies into shape by the time the universe turned 400 million years old, or less than 3 percent of its current age.


                </p>
            </div>
            <div>
            <img src = 'jeremy-thomas-E0AHdsENmDg-unsplash.jpg' width={600} alt = 'jjj'/>
                <p>Astronomers now think that nearly all galaxies—with possible exceptions—are embedded in huge haloes of dark matter. Theoretical models also suggest that in the early universe, vast tendrils of dark matter provided normal matter the gravitational scaffold it needed to coalesce into the first galaxies.
                </p>
            </div>
            <div>
            <img src = 'nasa-rTZW4f02zY8-unsplash.jpg' width={600} height={410} alt = 'jjj'/>
                <p>Elliptical galaxies contain many older stars, but little dust and other interstellar matter. Their stars orbit the galactic center, like those in the disks of spiral galaxies, but they do so in more random directions. Few new stars are known to form in elliptical galaxies. They are common in galaxy clusters.
                </p>
            </div>
        </div>
    )
}
export default Header