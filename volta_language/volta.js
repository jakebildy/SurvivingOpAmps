let textBox = document.getElementById("volta");

function updateColor()
{
    textBox.innerHTML = textBox.innerHTML.replace(/~plus/g, "⁺");
    textBox.innerHTML = textBox.innerHTML.replace(/~minus/g, "⁻");
    textBox.innerHTML = textBox.innerHTML.replace(/micro-/g, "μ");
    textBox.innerHTML = textBox.innerHTML.replace(/ohm/g, "Ω");
    textBox.innerHTML = textBox.innerHTML.replace(/_out/g, "ᴏᴜᴛ");
    textBox.innerHTML = textBox.innerHTML.replace(/_in/g, "ɪɴ");
    textBox.innerHTML = textBox.innerHTML.replace(/_eq/g, "ᴇǫ");
    textBox.innerHTML = textBox.innerHTML.replace(/_1/g, "₁");
    textBox.innerHTML = textBox.innerHTML.replace(/_2/g, "₂");
    textBox.innerHTML = textBox.innerHTML.replace(/_3/g, "₃");
    textBox.innerHTML = textBox.innerHTML.replace(/_REF/g, "ʀᴇғ");
    textBox.innerHTML = textBox.innerHTML.replace(/integral/g, "∫");

    //colors

    textBox.innerHTML = textBox.innerHTML.replace(/if/g, "<span style=\"color: #72e6e6;\">if</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/else/g, "<span style=\"color: #72e6e6;\">else</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/def/g, "<span style=\"color: #72e6e6;\">def</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/output/g, "<span style=\"color: #ff727e;\">output</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/dt/g, "<span style=\"color: #92ffa5;\">dt</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/∫/g, "<span style=\"color: #92ffa5;\">∫</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/property/g, "<span style=\"color: #ffc14f;\">property</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/; /g, "<b><span style=\"color: #6e7374;\">; </span></b>");
    textBox.innerHTML = textBox.innerHTML.replace(/\*/g, "<b><span style=\"color: #dd25ed;\">*</span></b>");
    textBox.innerHTML = textBox.innerHTML.replace(/\+/g, "<b><span style=\"color: #dd25ed;\">+</span></b>");
    textBox.innerHTML = textBox.innerHTML.replace(/-/g, "<b><span style=\"color: #dd25ed;\">-</span></b>");
    textBox.innerHTML = textBox.innerHTML.replace(/\|\|/g, "<b><span style=\"color: #dd25ed;\">||</span></b>");
    textBox.innerHTML = textBox.innerHTML.replace(/_R/g, "ᵣ");

    textBox.innerHTML = textBox.innerHTML.replace(/Vᴏᴜᴛ/g, "<span style=\"color: #88ff4e;\">Vᴏᴜᴛ</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/Vɪɴ/g, "<span style=\"color: #88ff4e;\">Vɪɴ</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/Vʀᴇғ/g, "<span style=\"color: #88ff4e;\">Vʀᴇғ</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/Vdd/g, "<span style=\"color: #88ff4e;\">Vdd</span>");
    textBox.innerHTML = textBox.innerHTML.replace(/Vss/g, "<span style=\"color: #88ff4e;\">Vss</span>");
}


updateColor();



function changeComponent(name) {
    if (name === "resistor") {
        textBox.innerHTML = " def resistor (voltage V_in, current I_R) : <br>\n" +
            "<br>\n" +
            "    &emsp; property R; #the resistance <br>\n" +
            "<br>\n" +
            "    &emsp; V_out = V_in - ( R * I_R ); <br>\n" +
            "    <br>\n" +
            "    &emsp; R_eq / V_REF = ( R_1 || R_2 ) / V_out; <br>\n" +
            "<br>\n" +
            "    &emsp; V_2 = ∫ V dt <br>\n" +
            "<br>\n" +
            "    &emsp; output V_out; <br>";

        updateColor();
    }

    if (name === "capacitor") {
        textBox.innerHTML = " def resistor (voltage V_in, current I_R) : <br>\n" +
            "<br>\n" +
            "    &emsp; property R; #the resistance <br>\n" +
            "<br>\n" +
            "    &emsp; V_out = V_in - ( R * I_R ); <br>\n" +
            "    <br>\n" +
            "    &emsp; R_eq / V_REF = ( R_1 || R_2 ) / V_out; <br>\n" +
            "<br>\n" +
            "    &emsp; V_2 = ∫ V dt <br>\n" +
            "<br>\n" +
            "    &emsp; output V_out; <br>";

        updateColor();
    }
}