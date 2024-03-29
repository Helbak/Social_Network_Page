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
    this.countStep2=1;
    this.countStep3=1;
    this.rulesBox=false;
    this.hisLanguages = [];
    this.stringLanguages = '';
    this.languages = ['Java', 'C', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby', 'Matlab', 'Python', 'R', 'Swift'];
    this.experiences = ['0 - 1 years', '1 - 2 years', '2 - 3 years', '3 - 4 years', '4 and more years'];
    this.area = ['usernameArea', 'passwordArea', 'confirmArea', 'phoneArea', 'emailArea', 'nameArea', 'surnameArea', 'genderArea', 'relationArea', 'progrLangArea', 'experienceArea'];
    this.usernameTipString = 'Enter a name of at least 1 and no more than 40 characters, in Latin letters';
    this.passwordTipString = 'Password must have from 6 to 30 characters, including one digit, one letter of the upper register, one letter of the lower register';
    this.confirmTipString = 'Passwords do not match';
    this.emailTipString = 'You entered an invalid email';
    this.phoneTipString1 = 'Enter the first sign "+"';
    this.phoneTipString2 = 'Enter the code of Ukraine or Israel or the United States';
    this.phoneTipString3 = 'The number of digits should be 12';
    this.phoneTipString4 = 'Enter only numbers';
    this.nameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital ';
    this.surnameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital';
    this.genderTipString = '';
    this.relationTipString = '';
    this.progrLangTipString = '';
    this.experienceTipString = '';
    this.checkBoxTipString = 'Do you agree?';


    this.stringStep1 = "<div class=\"body__steps\">Step 1 of 3</div>\n" +
        "        <div class=\"body__title\">Create an Account</div>\n" +
        "        <div class=\"body__step1\">\n" +
        "            <span  class=\"step1 span\" id = \"usernameArea\">Username*</span>\n" +
        "            <input class=\"step1 input\" type=\"text\" id = \"username\">\n" +
        "            <span  class=\"step1 span\" id = \"passwordArea\">Password*</span>\n" +
        "            <input class=\"step1 input\" type=\"password\" id = \"password\">\n" +
        "            <span  class=\"step1 span\" id = \"confirmArea\">Confirm*</span>\n" +
        "            <input class=\"step1 input\" type=\"password\" id = \"confirm\">\n" +
        "            <span  class=\"step1 span\" id = \"emailArea\">E-mail*</span>\n" +
        "            <input class=\"step1 input\" type=\"text\" id = \"email\">\n" +
        "            <span  class=\"step1 span\" id = \"phoneArea\">Phone number*</span>\n" +
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
        "\n" +
        "    <select class=\"step1 input\" type=\"text\" id=\"gender\" style=\"font-family: 'Times New Roman'\">\n" +
        "        <option  value=\"\"></option>\n" +
        "        <option value=\"female\">female</option>\n" +
        "        <option value=\"male\">male</option>\n" +
        "    </select>\n" +
        "</div>\n" +
        "<span class=\"step1 span\" id='relationArea'>Relationship status</span>\n" +
        "<div>\n" +
        "    <select class=\"step1 input\" type=\"text\" id=\"relation\" style=\"font-family: 'Times New Roman'\">\n" +
        "        <option  value=\"\"></option>\n" +
        "        <option value=\"divorced\">divorced</option>\n" +
        "        <option value=\"married\">married</option>\n" +
        "        <option value=\"single\">single</option>\n" +
        "    </select>\n" +
        "</div>\n" +
        "\n" +
        "\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFrom2\">Back</button>\n" +
        "</div>\n" +
        "<div class=\"body__next\">\n" +
        "    <button class=\"next\" id=\"nextButtonFrom2\">Next</button>\n" +
        "</div>\n";

    this.stringStep3 = "<div class=\"body__steps\">Step 3 of 3</div>\n" +
        "<div class=\"body__title\">Create an Account</div>\n" +
        "<div class=\"body__step1\">\n" +
        "    <span  class=\"step1 span\" id='progrLangArea'>Programming languages*</span>\n" +
        "\n" +
        "<div class=\"multilist\">\n" +
        "    <input type=\"text\" class=\"step1 input multileft\" readonly=\"true\" type=\"text\" id=\"progrLangLeft\" style=\"font-family: 'Times New Roman'\">\n" +
        "    <select  type=\"text\" class=\"step1 input multiright\" id=\"progrLangRight\" style=\"font-family: 'Times New Roman'\">\n" +
        "        <option selected disabled hidden=\"\" value=\"\"></option>\n" +
        "        <option value=\"No one\">No one</option>\n" +
        "        <option value=\"C\">C</option>\n" +
        "        <option value=\"C++\">C++</option>\n" +
        "        <option value=\"C#\">C#</option>\n" +
        "        <option value=\"Java\">Java</option>\n" +
        "        <option value=\"JavaScript\">JavaScript</option>\n" +
        "        <option value=\"Matlab\">Matlab</option>\n" +
        "        <option value=\"PHP\">PHP</option>\n" +
        "        <option value=\"Ruby\">Ruby</option>\n" +
        "        <option value=\"Python\">Python</option>\n" +
        "        <option value=\"R\">R</option> No one\n" +
        "\n" +
        "    </select>\n" +
        "</div>\n" +
        "    <span  class=\"step1 span\" id='experienceArea'>Work experience*</span>\n" +
        "\n" +
        "    <select class=\"step1 input\" type=\"text\" id=\"experience\" style=\"font-family: 'Times New Roman'\">\n" +
        "        <option selected disabled hidden=\"\" value=\"\"></option>\n" +
        "        <option value=\"0-1 years\">0-1 years</option>\n" +
        "        <option  value=\"1-2 years\">1-2 years</option>\n" +
        "        <option  value=\"2-3 years\">2-3 years</option>\n" +
        "        <option  value=\"3-4 years\">3-4 years</option>\n" +
        "        <option  value=\"4 and more years\">4 and more years</option>\n" +
        "    </select>\n" +
        "    <div class=\"step1 checkbox\">\n" +
        "        <input type=\"checkbox\" id = \"checkboxRules\" value=\"true\">\n" +
        "        <label for=\"checkbox\">Accept the <a href=\"#\" id=\"btnRules\">registration</a> rules</label>\n" +
        "\n" +
        "    </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "    <div class=\"body__back\">\n" +
        "        <button class=\"back\" id=\"backButtonFromStep3\">Back</button>\n" +
        "    </div>\n" +
        "\n" +
        "    <div class=\"body__register\">\n" +
        "        <form action=\"successedRegistr.html\">\n" +
        "            <button class=\"register\" id=\"registerButton\">Register</button>\n" +
        "        </form>\n" +
        "    </div>\n" +
        "</div>\n" +
        "</div>";
    this.rules = "<div class=\"body__title\">Rules</div>\n" +
        "<div class=\"body__step1\">\n" +
        "\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFromRules\">Back</button>\n" +
        "</div>";
};

Model.prototype.getResult = function () {
    return this.stringResult;
};
Model.prototype.getStep1 = function () {
    return this.stringStep1;
};
Model.prototype.getStep2 = function () {
    return this.stringStep2;
};
Model.prototype.getStep3 = function () {
    return this.stringStep3;
};
Model.prototype.getRules = function () {
    return this.rules;
};
Model.prototype.getUsername = function () {
    return this.username;
};
Model.prototype.setUsername = function (username) {
    return this.username = username;
};

Model.prototype.getPassword = function () {
    return this.password;
};
Model.prototype.setPassword = function (password) {
    return this.password = password;
};

Model.prototype.getConfirm = function () {
    return this.confirm;
};
Model.prototype.setConfirm = function (confirm) {
    return this.confirm = confirm;
};

Model.prototype.getPhone = function () {
    return this.phone;
};
Model.prototype.setPhone = function (phone) {
    return this.phone = phone;
};

Model.prototype.getEmail = function () {
    return this.email;
};
Model.prototype.setEmail = function (email) {
    return this.email = email;
};

Model.prototype.getName = function () {
    return this.name;
};
Model.prototype.setName = function (name) {
    return this.name = name;
};

Model.prototype.getSurname = function () {
    return this.surname;
};
Model.prototype.setSurname = function (surname) {
    return this.surname = surname;
};

Model.prototype.getGender = function () {
    return this.gender;
};
Model.prototype.setGender = function (gender) {
    return this.gender = gender;
};

Model.prototype.getRelation = function () {
    return this.relation;
};
Model.prototype.setRelation = function (relation) {
    return this.relation = relation;
};
Model.prototype.getProgrLang = function () {
    return this.progrLang;
};
Model.prototype.setProgrLang = function (progrLang) {
    return this.progrLang = progrLang;
};
Model.prototype.getExperience = function () {
    return this.experience;
};
Model.prototype.setExperience = function (experience) {
    return this.experience = experience;
};
Model.prototype.getArea = function () {
    return this.area;
};
Model.prototype.setRulesBox = function (rulesBox) {
    return this.rulesBox = rulesBox;
};
Model.prototype.getArea = function () {
    return this.rules;
};
Model.prototype.setCountStep2 = function (countStep2) {
    return this.countStep2 = countStep2;
};
Model.prototype.setCountStep3 = function (countStep3) {
    return this.countStep3 = countStep3;
};
Model.prototype.setHisLanguages = function (language) {
    if(language==='No one'){
        this.hisLanguages=['No one'];
        this.stringLanguages='No one'
        return;
    }
    if(this.hisLanguages[0]==='No one'){
        this.hisLanguages[0]=language;
        return;
    }
      this.hisLanguages[this.hisLanguages.length] = language;
};


