function Model() {
    this.username = "";
    this.password = "";
    this.confirm = "";
    this.phone = "";
    this.email = "";
    this.name = "";
    this.surname = "";
    this.gender = "";
    this.relation = "";
    this.experience = "";
    this.progrLang = "";
    this.rules;
    this.area = ['usernameArea', 'passwordArea', 'confirmArea', 'phoneArea', 'emailArea','nameArea', 'surnameArea', 'genderArea', 'relationArea', 'progrLangArea', 'experienceArea'];
    this.usernameTipString = 'Enter a name of at least 1 and no more than 40 characters, in Latin letters';
    this.passwordTipString = 'password must have from 6 to 30 characters, including one digit, one letter of the upper register, one letter of the lower register';
    this.confirmTipString = 'Passwords do not match';
    this.emailTipString = 'You entered an invalid email';
    this.phoneTipString = 'enter first sign "+" then USA code "+1" and 12 digits or Israel code "+972" and 9 digits or Ukrainian code "+380" and 9 digits' ;
    this.nameTipString = '';
    this.surnameTipString = '';
    this.genderTipString = '';
    this.relationTipString = '';
    this.progrLangTipString = '';
    this.experienceTipString = '';


this.stringStep1 = "<div class=\"body__steps\">Step 1 of 3</div>\n" +
    "        <div class=\"body__title\">Create an Account</div>\n" +
    "        <div class=\"body__step1\">\n" +
    "            <span  class=\"step1 span\" id = \"usernameArea\">Username</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"username\">\n" +
    "            <span  class=\"step1 span\" id = \"passwordArea\">Password*</span>\n" +
    "            <input class=\"step1 input\" type=\"password\" id = \"password\">\n" +
    "            <span  class=\"step1 span\" id = \"confirmArea\">Confirm*</span>\n" +
    "            <input class=\"step1 input\" type=\"password\" id = \"confirm\">\n" +
    "            <span  class=\"step1 span\" id = \"emailArea\">E-mail*</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"email\">\n" +
    "            <span  class=\"step1 span\" id = \"phoneArea\">Phone*</span>\n" +
    "            <input class=\"step1 input\" type=\"tel\" id = \"phone\">\n" +
    "        </div>\n" +
    "        <div class=\"body__next\">\n" +
    "            <button class=\"next\" id=\"nextButton\">Next</button>\n" +
    "        </div>";

    this.stringStep2 = "<div class=\"body__steps\">Step 2 of 3</div>\n" +
        "<div class=\"body__title\">Create an Account</div>\n" +
        "<div class=\"body__step1\">\n" +
        "    <span class=\"step1 span\" id='nameArea'>Name*</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"name\">\n" +
        "    <span class=\"step1 span\" id='surnameArea'>Surname</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"surname\">\n" +
        "    <span class=\"step1 span\" id='genderArea'>Gender</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"gender\" list=\"l3\">\n" +
        "    <datalist id=\"l3\">\n" +
        "        <option>male</option>\n" +
        "        <option>female</option>\n" +
        "    </datalist>\n" +
        "    <span class=\"step1 span\" id='relationArea'>Relationship status</span>\n" +
        "     <input class=\"step1 input\" type=\"text\" id=\"relation\" list=\"l4\">\n" +
        "    <datalist id=\"l4\">\n" +
        "        <option>single</option>\n" +
        "        <option>married</option>\n" +
        "        <option>divorced</option>\n" +
        "    </datalist>\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFrom2\">Back</button>\n" +
        "</div>\n" +
        "<div class=\"body__next\">\n" +
        "    <button class=\"next\" id=\"nextButtonFrom2\">Next</button>\n" +
        "</div>";

        this.stringStep3 = "<div class=\"body__steps\">Step 3 of 3</div>\n" +
            "    <div class=\"body__title\">Create an Account</div>\n" +
            "    <div class=\"body__step1\">\n" +
            "        <span  class=\"step1 span\" id='progrLangArea'>Programming languages</span>\n" +
            "        <input class=\"step1 input\" type=\"text\" id=\"progrLang\" list=\"l1\">\n" +
            "        <datalist id=\"l1\">\n" +
            "\n" +
            "            <option>Java</option>\n" +
            "            <option>C</option>\n" +
            "            <option>C++</option>\n" +
            "            <option>C#</option>\n" +
            "            <option>JavaScript</option>\n" +
            "            <option>PHP</option>\n" +
            "            <option>Ruby</option>\n" +
            "            <option>Matlab</option>\n" +
            "            <option>Python</option>\n" +
            "            <option>R</option>\n" +
            "            <option>Swift</option>\n" +
            "        </datalist>\n" +
            "        <span  class=\"step1 span\" id='experienceArea'>Work experience</span>\n" +
            "        <input class=\"step1 input\" type=\"text\" id=\"experience\" list=\"l2\">\n" +
            "        <datalist id=\"l2\">\n" +
            "            <option>0 - 1 years</option>\n" +
            "            <option>1 - 2 years</option>\n" +
            "            <option>2 - 3 years</option>\n" +
            "            <option>3 - 4 years</option>\n" +
            "            <option>4 and more years</option>\n" +
            "        </datalist>\n" +
            "        <div class=\"step1 checkbox\">\n" +
            "            <input type=\"checkbox\" id = \"checkboxRules\" value=\"true\">\n" +
            "            <label for=\"checkbox\">Accept the <a href=\"mock.html\">registration</a> rules</label>\n" +
            "        </div>\n" +
            "\n" +
            "\n" +
            "\n" +
            "    <div class=\"body__back\">\n" +
            "        <button class=\"back\" id=\"backButtonFromStep3\">Back</button>\n" +
            "    </div>\n" +
            "        <div class=\"body__register\">\n" +
            "            <button class=\"register\" id=\"registerButton\">Register</button>\n" +
            "        </div>\n" +
            "    </div>";

        this.stringResult = "<div class=\"body__title\">Successful registration</div>\n" +
            "<div class=\"body__step1\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"usernameResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"password\" id=\"passwordResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"confirmResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"emailResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"tel\" id=\"phoneResult\">\n" +
            "\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"nameResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"surnameResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"genderResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"relationResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"progrLangResult\">\n" +
            "\n" +
            "    <input class=\"step1 input\" type=\"text\" id=\"experienceResult\">\n" +
            "\n" +
            "\n" +
            "</div>\n" +
            "<div class=\"body__back\">\n" +
            "    <button class=\"back\" id=\"backButtonFromResult\">Back</button>\n" +
            "</div>";
};
Model.prototype.getResult = function(){
    return this.stringResult;
};
Model.prototype.getStep1 = function(){
    return this.stringStep1;
};
Model.prototype.getStep2 = function(){
    return this.stringStep2;
};
Model.prototype.getStep3 = function(){
    return this.stringStep3;
};
Model.prototype.getUsername = function(){
    return this.username;
};
Model.prototype.setUsername = function(username){
    return this.username = username;
};

Model.prototype.getPassword = function(){
    return this.password;
};
Model.prototype.setPassword = function(password){
    return this.password = password;
};

Model.prototype.getConfirm = function(){
    return this.confirm;
};
Model.prototype.setConfirm = function(confirm){
    return this.confirm = confirm;
};

Model.prototype.getPhone = function(){
    return this.phone;
};
Model.prototype.setPhone = function(phone){
    return this.phone = phone;
};

Model.prototype.getEmail = function(){
    return this.email;
};
Model.prototype.setEmail = function(email){
    return this.email = email;
};

Model.prototype.getName = function(){
    return this.name;
};
Model.prototype.setName = function(name){
    return this.name = name;
};

Model.prototype.getSurname = function(){
    return this.surname;
};
Model.prototype.setSurname = function(surname){
    return this.surname = surname;
};

Model.prototype.getGender = function(){
    return this.gender;
};
Model.prototype.setGender = function(gender){
    return this.gender = gender;
};

Model.prototype.getRelation = function(){
    return this.relation;
};
Model.prototype.setRelation = function(relation){
    return this.relation = relation;
};
Model.prototype.getProgrLang = function(){
    return this.progrLang;
};
Model.prototype.setProgrLang = function(progrLang){
    return this.progrLang = progrLang;
};
Model.prototype.getExperience = function(){
    return this.experience;
};
Model.prototype.setExperience = function(experience){
    return this.experience = experience;
};
Model.prototype.getArea = function(){
    return this.area;
};
Model.prototype.setRules = function(rules){
    return this.rules = rules;
};
Model.prototype.getArea = function(){
    return this.rules;
};





