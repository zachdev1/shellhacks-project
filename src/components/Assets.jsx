import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/assets.css";

const Assets = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const updateAssets = (e) => {
        e.preventDefault();
        localStorage.setItem("assets", parseFloat(input))
        setInput("");
        navigate("/dashboard")
      };

    return (
        <>
            <div className="assets">
                <h3>Assets</h3>
                <form onSubmit={updateAssets}>
                    <input
                    type="text"
                    placeholder="Description"
                    required
                    />
                    <label for="category">Category</label>

                    <select name="category" id="category">
                    <option value="Real Estate">Real Estate</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Cash">Cash</option>
                    <option value="Etc">Etc</option>
                    </select>

                    <input
                    type="number"
                    placeholder="Amount"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    />
                    <button type="submit" className="assets-submit">Add Assest</button>
                </form>
            </div>
        </>
    )
};

export default Assets;