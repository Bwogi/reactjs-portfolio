(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),o=(t(14),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi, ",e.name," here."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am Andrew Bwogi, a ",e.role," (UC Berkeley, 2021).",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"})))))}}]),a}(n.Component),d=t(8),f=t.n(d);var E=function(){return l.a.createElement("section",{id:"resume",className:"resume"},l.a.createElement("h1",null,"Resume"),l.a.createElement("p",null,"Download my resume"," ",l.a.createElement("a",{href:f.a,download:!0},"here")),l.a.createElement("div",{className:"proficiencies"},l.a.createElement("strong",null,"Front end proficiences"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"React"))),l.a.createElement("div",{className:"proficiencies"},l.a.createElement("strong",null,"Back end proficiences"),l.a.createElement("ul",null,l.a.createElement("li",null,"MONGODB"),l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"Express.js"))))},b=(n.Component,function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component));var v=function(){return l.a.createElement("section",{id:"contact",className:"contact-me"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"Shoot me an "," ",l.a.createElement("a",{href:"mailto:andrew.bwogi@gmail.com"},"email"),". and My Social handles \ud83d\udc47"))},g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),w={imagebaseurl:"https://bwogi.github.io/",name:"Andrew \ud83d\udc4b",role:"Fullstack Web Developer",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I previously worked with Kyambogo University as a Software Developer for over 10 years. ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/andrew-bwogi-6796bb5/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/bwogi",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/andrewbwogi",className:"fa fa-twitter"},{name:"facebook",url:"http://facebook.com/andrew.bwogi",className:"fa fa-facebook"},{name:"instagram",url:"http://instagram.com/andrew.bwogi",className:"fa fa-instagram"}],aboutme:"Just completed my studies at University of California, Berkeley(2021 class). I previously worked with Kyambogo University as a Software Developer for over 10 years. I\u2019m looking to collaborate on MERN stack, React Native and Solidity(Crypto) Projects. \ud83d\udc50\ud83c\udffb On a lighter note, Piano, Jazz, Classical music and family keep me sane. \ud83d\ude0e FinTech and IoT are also on my radar.",address:"India",website:"https://bwogi.github.io",education:[{UniversityName:"The LNM Insitute of Information Technology",specialization:"Some specialization",MonthOfPassing:"Aug",YearOfPassing:"2020",Achievements:"Some Achievements"},{UniversityName:"Some University",specialization:"Some specialization",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Some Achievements"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"I'm pretty comfortable with the following technologies",skills:[{skillname:"ReactJs"},{skillname:"MongoDB"},{skillname:"GraphQl"},{skillname:"Express"},{skillname:"Jest"},{skillname:"Solidity"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"../public/images/portfolio/coffee.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"Ballonbrace.com was done to my satisfaction. Andrew will surely not dissappoint",name:"Prof. Olajire Oidowu"},{description:"Andrew saved us with our Results management System. He is surely talented","name.":"Peter Okello"}]},N=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:w}),l.a.createElement(h,{resumeData:w}),l.a.createElement(b,{resumeData:w}),l.a.createElement(E,{resumeData:w}),l.a.createElement(v,{resumeData:w}),l.a.createElement(g,{resumeData:w}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t.p+"static/media/Resume.fc6aeb7c.pdf"},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.52a90f2a.chunk.js.map