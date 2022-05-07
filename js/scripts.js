window.addEventListener('load', function(){

function getStart() {
    
    const anchors = {
        navigation : document.querySelector('.navigation'),
        flat : document.querySelector('.flat')
    }
        
    return anchors;
}
    
function getAbout() {
    
    const anchors = {
        car : document.querySelector('.car'),
        skills : document.querySelector('.--skills'),
        aboutWrapper : document.querySelector('.about-wrapper'),
        about : document.querySelector('.--about')
    }
        
    return anchors;
}
    
function getPortfolio() {
    
    const anchors = {
        portfolioWrapper : document.querySelector('.portfolio-wrapper'),
        portfolio : document.querySelector('.--portfolio'),
        projects : document.querySelector('.projects')
    }
        
    return anchors;
}
    
function getProjects() {
    
    const anchors = {
        buttons : document.querySelectorAll('.projects__button'),
        projectsInfo : document.querySelectorAll('.projects__info')
    }
        
    return anchors;
}
    
function getContact() {
    
    const anchors = {
        flatContact : document.querySelector('.flat-contact'),
        contactWrapper : document.querySelector('.contact-wrapper'),
        contact : document.querySelector('.--contact')
    }
        
    return anchors;
}    

function getFooter() {
    
    const anchors = {
        footer : document.querySelector('.footer'),
        return : document.querySelector('.footer__return')
    }
        
    return anchors;
}

function getMenu() {
    
    const menuListItems = document.querySelectorAll('.navigation__list-item');
    
    const menu = {
        about : menuListItems[0],
        portfolio : menuListItems[1],
        contact : menuListItems[2]
    }
    
    return menu;
}

getMenu().about.addEventListener('click', function(){

    addAnimations(getStart, 'Out');
    
    setTimeout(function(){
        addDisplayNone(getStart);
        removeAnimations(getStart, 'Out');
    }, 1800);  
      
    setTimeout(function(){
        addFooter();
        addAnimations(getAbout, 'Come');
        removeDisplayNone(getAbout);
        showSkillsDescription();
    }, 1000); 
    
    setTimeout(function(){
        document.querySelector('.about-wrapper').scrollTo(0, 0);
        removeAnimations(getAbout, 'Come');
    }, 3200); 
});

getMenu().portfolio.addEventListener('click', function(){

    addAnimations(getStart, 'Out');
    addProjectsButtonsAction();
    
    setTimeout(function(){
        addDisplayNone(getStart);
        removeAnimations(getStart, 'Out')
    }, 1800);  
      
    setTimeout(function(){
        addFooter();
        addAnimations(getPortfolio, 'Come');
        removeDisplayNone(getPortfolio); 
    }, 1000); 
    
    setTimeout(function(){
        document.querySelector('.portfolio-wrapper').scrollTo(0, 0);
        removeAnimations(getPortfolio, 'Come');
    }, 3200); 
});

getMenu().contact.addEventListener('click', function(){
    
    addAnimations(getStart, 'Out');
    
    setTimeout(function(){
        addDisplayNone(getStart);
        removeAnimations(getStart, 'Out');
        
    }, 1800);  
      
    setTimeout(function(){
        addAnimations(getContact, 'Come');
        removeDisplayNone(getContact);
        getFooter().return.classList.remove('display-none');
        getFooter().return.classList.add('returnCome'); 
    }, 1000); 
    
    setTimeout( function(){ 
        document.querySelector('.contact-wrapper').scrollTo(0, 0);
        getFooter().return.classList.remove('returnCome');
        removeAnimations(getContact, 'Come');
    }, 4200); 

});
    
document.querySelector('.footer__return').addEventListener('click', returnButton);

function returnButton() {
    
    removeFooter();
    addAnimations(getAbout, 'Out');
    addAnimations(getPortfolio, 'Out');
    addAnimations(getContact, 'Out');
    
    setTimeout(function(){
        addDisplayNone(getAbout);
        addDisplayNone(getPortfolio);
        addDisplayNone(getContact);
        removeDisplayNone(getStart);
        addAnimations(getStart, 'Come');
    }, 1000); 
    
    setTimeout(function() {
        document.querySelector('body').scrollTo(0, 0);
        removeAnimations(getAbout, 'Out');
        removeAnimations(getPortfolio, 'Out');
        removeAnimations(getContact, 'Out');
        removeAnimations(getStart, 'Come'); 
    }, 3200)
}
    
function addProjectsButtonsAction() {
    
    for(i = 0; i < getProjects().buttons.length; i++){
        getProjects().buttons[i].addEventListener('click', function(){
            this.classList.add('--projects-active');
            removeActiveFromButtons(this);
            showProjectInfo(this); 
        });  
    }; 
}
    
function removeActiveFromButtons(current) {
    
    for(i = 0; i < getProjects().buttons.length; i++){
        if(current != getProjects().buttons[i]) {
            getProjects().buttons[i].classList.remove('--projects-active');
        };
    };
}
    
function showProjectInfo(current) {
    
    for(i = 0; i < getProjects().projectsInfo.length; i++){
        if(current.id === getProjects().projectsInfo[i].id) {
            getProjects().projectsInfo[i].classList.remove('display-none');
        } else {
            if(!getProjects().projectsInfo[i].classList.contains('display-none')) {
                getProjects().projectsInfo[i].classList.add('display-none');
            };
        };
    };
}
    
function showSkillsDescription() {
    
    const skills = document.querySelectorAll('.skills__list-item');
    
    for(i=0; i < skills.length;i++) {
        skills[i].addEventListener('mouseover', function(){
            
            const x = window.event.clientX;
            const y = window.event.clientY;
            
            const skillText = document.createElement('p');
            skillText.classList.add('skills__text')
            
            skillText.style.display = 'flex';
            skillText.style.top = y + 30 + 'px';
            skillText.style.left = x - 215 + 'px';
            checkWindowSize(x);
            skillText.textContent = addTextContent(this);
            
            function addTextContent(e) {
                
                const skillsDescriptions = ['Znam HTML5 na poziomie umożliwiającym swobodne kodowanie witryn internetowych.', 'Potrafię tworzyć responsywne strony przy pomocy flexboxa oraz media queries.', 'Potrafię sprawnie modyfikować pliki html, używać AJAXa oraz tworzyć proste mechinki minigier.'];
                if(e.id == 0) {
                    return skillsDescriptions[0];
                } else if(e.id == 1) {
                    return skillsDescriptions[1];
                } else {
                    return skillsDescriptions[2];
                }; 
            }
            
            function checkWindowSize(x) {
                
                if((x + 215) >= window.innerWidth) {
                    skillText.style.right = 15 + 'px';
                    skillText.style.left = 'auto';
                }
                
                if(window.innerWidth <= 700) {
                    skillText.style.right = 'auto';
                    skillText.style.left = 15 + 'px';
                }
            }
            
            document.body.appendChild(skillText);
        });
    };
    
    for(i=0; i < skills.length;i++) {
        skills[i].addEventListener('mouseout', function(){
            document.querySelector('.skills__text').parentNode.removeChild(document.querySelector('.skills__text'));   
        });
    };
    
}

function addFooter() {
    
    addAnimations(getFooter, 'Come');
    removeDisplayNone(getFooter);
    
    setTimeout(function() {
        removeAnimations(getFooter, 'Come')
    }, 3200);
}

function removeFooter() {
    
    addAnimations(getFooter, 'Out');
    setTimeout(function(){ 
        addDisplayNone(getFooter)
    }, 1000);
    
    setTimeout(function() {
        removeAnimations(getFooter, 'Out')
    }, 3200);
}

function addDisplayNone(block) {
    
    for(const key in block()) {
        block()[key].classList.add('display-none');
    } 
}

function removeDisplayNone(block) {
    
    for(const key in block()) {
        block()[key].classList.remove('display-none');
    } 
}

function addAnimations(block, animation) {
    
    for(const key in block()) {
        block()[key].classList.add([key] + animation);
    }
}

function removeAnimations(block, animation) {
    
    for(const key in block()) {
        block()[key].classList.remove([key] + animation);
    }
}

});



