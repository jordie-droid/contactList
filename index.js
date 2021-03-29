        let buttonReset = document.querySelector('#reset');
        let contactsList = []
        buttonReset.addEventListener('click', function(){
            let imageProfile = document.querySelector('#monImage');
            imageProfile.src="avatar1.png";
        });

        let listImageChoice = document.querySelector('#import-image');
        listImageChoice.addEventListener('change', function(){
            if(this.files && this.files[0]){
                let image = document.querySelector('#monImage');
                image.src = URL.createObjectURL(this.files[0]);
            }
        });

        let buttonCreate = document.querySelector('#creer');
        let buttonDelete = "";

        buttonCreate.addEventListener('click', function(e){
            e.preventDefault();
            
            //récupération des composants html
            let prename = document.querySelector('#prename');
            let nom = document.querySelector('#name');
            let group = document.querySelector('#group');
            let bio = document.querySelector('#bio');
            let img = document.querySelector('#monImage');

            //récupération des valeurs
            prename = prename.value;
            nom = nom.value;
            let choice = group.selectedIndex;
            optionGroupValue = group.options[choice].value;
            bio = bio.value;
            img = img.src;

            if(prename == "" || nom == "" || optionGroupValue=="" || bio==""){
                // affichage d'alert
                let alertCustomize = document.querySelector(".customize-alert");
                let alertCustomizeMessage = document.querySelector(".alert-message");
                let closeAlerteCustomize = document.querySelector(".close-alert.fa.fa-times.fa-2x");
                alertCustomize.style.display='block';
                alertCustomizeMessage.innerText=`Veuillez remplir toutes les zones s'il vous plait !!!`;
                nom.disabled="true";
                prename.disabled="true";
                group.disabled="true";
                bio.disabled="true";

                //fonction disparaitre alert
                closeAlerteCustomize.addEventListener('click',function(){
                    
                //activer les zones
                nom.disabled="";
                prename.disabled="";
                group.disabled="";
                bio.disabled="";

                //disparaitre l'alerte
                let mainParent = this.parentNode;
                mainParent.style.display="none";
                });
            }else{
                //create contact object
                let contact = {prenom:prename,nom:nom,groupe:group,bio:bio};
                contactsList.push(contact);
                console.log(contactsList);
                
                //création du composant div container des contacts
                let contactContaint = document.querySelector('#contact-list-content');
                let divElementContainer = document.createElement('div');
                divElementContainer.classList.add('carte-contact-content-all');
                contactContaint.appendChild(divElementContainer);

                //Image container
                let divElementImage = document.createElement('div');
                divElementImage.classList.add('border-black');
                divElementContainer.appendChild(divElementImage);

                //Création de l'image ronde
                let imageRounded = document.createElement('img');
                imageRounded.src=img;
                imageRounded.classList.add('image-card-viewer');
                divElementImage.appendChild(imageRounded);

                //Text container
                let divElementText = document.createElement('div');
                divElementText.classList.add('border-blue');
                divElementContainer.appendChild(divElementText);

                //création du boutton close 
                let iconDeleteContact = document.createElement('i');
                iconDeleteContact.classList.add('btn-close','fa','fa-times','fa-2x');
                divElementText.appendChild(iconDeleteContact);
                buttonDelete = document.querySelectorAll('.btn-close.fa.fa-times.fa-2x');

                //création des names
                let names = document.createElement('h3');
                names.innerText = prename + " " + nom;
                divElementText.append(names);

                //création du group 
                let printGroup = document.createElement('h4');
                printGroup.innerText = optionGroupValue;
                divElementText.append(printGroup);

                //création de la bio
                let printBio = document.createElement('p');
                printBio.innerText = bio;
                printBio.classList.add('bio');
                divElementText.append(printBio);
                divElementText.classList.add('field');

                //Supprimer contact
                for(let i = 0; i < buttonDelete.length; i++){
                    buttonDelete[i].addEventListener('click',function(){
                        contactContaint.removeChild(this.parentNode.parentNode);                    
                    });
                }
            }
        });

        function createElement(){
            
        }