import React, { useState } from 'react'

const Form = () => {
    const [homeValue, setHomeValue] = useState('')

    return (
        <>
            <form>
                <label>
                    your home:<br />
                    <textarea
                        value={homeValue}
                        onChange={(event) => setHomeValue(event.target.value)}
                    />
                </label><br />
                <input type="submit" value="Submit" />

            </form>
        </>
    )
}

export default Form