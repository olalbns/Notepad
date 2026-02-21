
var btn_dash = document.getElementById("Dash");
var btn_notes = document.getElementById("Notes");
var btn_prog = document.getElementById("Prog");
var btn_cate = document.getElementById("Cate");
var btn_para = document.getElementById("Para");
var uri = location.pathname;
var sec_dash = document.getElementById("Sec-dash");
var sec_notes = document.getElementById("Sec-notes");
var sec_prog = document.getElementById("Sec-prog");
var sec_cate = document.getElementById("Sec-cate");
var sec_para = document.getElementById("Sec-para");
var sec_folders = document.getElementById("Sec-folders");
var folderInfo = document.getElementById("folder-info");
var noteTextarea = document.getElementById("noteTextarea");
const folderContainer = document.getElementById("folders-container");

function affiErreurPage() {
    if (location.pathname !== "/Notepad+/" && location.pathname !== "/Notepad+/index.php" && location.pathname !== "/Notepad+/home" && location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes") {
        sec_dash.style.display = "none";
        sec_notes.style.display = "none";
        sec_prog.style.display = "none";
        sec_cate.style.display = "none";
        sec_para.style.display = "none";
        document.getElementById("Sec-OpenNote").setAttribute("hidden", "");
        document.getElementById("sec-erreur").style.display = "block";
        console.log(location.pathname)
    }
}

function affidash() {
    document.getElementById("Sec-dash").style.display = "block"
    document.getElementById("Dash").classList = "sidelink active-sidelink";
    sec_notes.style.display = "none";
    document.getElementById("Notes").className = "sidelink";
    sec_prog.style.display = "none"
    document.getElementById("Prog").className = "sidelink";
    sec_cate.style.display = "none"
    document.getElementById("Cate").className = "sidelink";
    sec_para.style.display = "none"
    document.getElementById("Para").className = "sidelink";
    document.getElementById("Sec-OpenNote").setAttribute("hidden", "");
    document.getElementById("sec-erreur").style.display = "none";
    // Masquer la preview
    toggleNotePreview(false);
}

btn_dash.addEventListener('click', function () {
    console.log("clicker");
    if (location.pathname !== "/Notepad+/" && location.pathname !== "/Notepad+/index.php" && location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes") {
        console.log(uri);
        history.replaceState(null, null, 'home');
        affidash()
    } else {
        history.replaceState(null, null, 'home');
        affidash();

    }

});

function affiNote() {
    sec_dash.style.display = "none"
    document.getElementById("Dash").className = "sidelink";
    sec_notes.style.display = "block";
    document.getElementById("Notes").classList = "sidelink active-sidelink";
    sec_prog.style.display = "none"
    document.getElementById("Prog").className = "sidelink";
    sec_cate.style.display = "none"
    document.getElementById("Cate").className = "sidelink";
    sec_para.style.display = "none"
    document.getElementById("Para").className = "sidelink";
    document.getElementById("Sec-folder").style.display = "block";
    sec_folders.style.display = "block";
    folderContainer.style.display = "flex";
    document.getElementById("Sec-OpenNote").setAttribute("hidden", true);
    document.getElementById("sec-erreur").style.display = "none";
    // Masquer la preview
    toggleNotePreview(false);
}

btn_notes.addEventListener('click', function () {
    if (location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes" && location.pathname !== "/Notepad+/home") {
        console.log(uri);
        history.replaceState(null, null, 'Mes_notes');
        affiNote();
    } else {
        history.replaceState(null, null, 'Mes_notes');
        affiNote();
    }

})

function affiprog() {
    sec_dash.style.display = "none"
    document.getElementById("Dash").className = "sidelink";
    sec_notes.style.display = "none";
    document.getElementById("Notes").className = "sidelink";
    sec_prog.style.display = "block"
    document.getElementById("Prog").classList = "sidelink active-sidelink";
    sec_cate.style.display = "none"
    document.getElementById("Cate").className = "sidelink";
    sec_para.style.display = "none"
    document.getElementById("Para").className = "sidelink";
    // Masquer la preview
    toggleNotePreview(false);
    document.getElementById("Sec-OpenNote").setAttribute("hidden", "");
    document.getElementById("sec-erreur").style.display = "none";
}

btn_prog.addEventListener('click', function () {

    if (location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes" && location.pathname !== "/Notepad+/home") {
        console.log(uri);
        history.replaceState(null, null, 'programme');
        affiprog();
    } else {
        history.replaceState(null, null, 'programme');
        affiprog();
    }

})

function afficate() {
    sec_dash.style.display = "none"
    document.getElementById("Dash").className = "sidelink";
    sec_notes.style.display = "none";
    document.getElementById("Notes").className = "sidelink";
    sec_prog.style.display = "none"
    document.getElementById("Prog").className = "sidelink";
    sec_cate.style.display = "block"
    document.getElementById("Cate").classList = "sidelink active-sidelink";
    sec_para.style.display = "none"
    document.getElementById("Para").className = "sidelink";
    document.getElementById("Sec-OpenNote").setAttribute("hidden", "");
    document.getElementById("sec-erreur").style.display = "none";
    // Masquer la preview
    toggleNotePreview(false);
}

btn_cate.addEventListener('click', function () {
    if (location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes" && location.pathname !== "/Notepad+/home") {
        console.log(uri);
        history.replaceState(null, null, 'categorie');
        afficate();
    } else {
        history.replaceState(null, null, 'categorie');
        afficate();
    }

})

function affipara() {
    sec_dash.style.display = "none"
    document.getElementById("Dash").className = "sidelink";
    sec_notes.style.display = "none";
    document.getElementById("Notes").className = "sidelink";
    sec_prog.style.display = "none"
    document.getElementById("Prog").className = "sidelink";
    sec_cate.style.display = "none"
    document.getElementById("Cate").className = "sidelink";
    sec_para.style.display = "block"
    document.getElementById("Para").classList = "sidelink active-sidelink";
    document.getElementById("Sec-OpenNote").setAttribute("hidden", "");
    document.getElementById("sec-erreur").style.display = "none";
    // Masquer la preview
    toggleNotePreview(false);
}

btn_para.addEventListener('click', function () {
    if (location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes" && location.pathname !== "/Notepad+/home") {
        console.log(uri);
        history.replaceState(null, null, 'parametre');
        affipara();
    } else {
        history.replaceState(null, null, 'parametre');
        affipara();
    }


})


var co = document.querySelector(".context-action");
var script;



// Context-menu handling: toggle menus when clicking the three-dots (`.action-note[data-target]`),
// close on outside click, and prevent clicks inside the menu from closing it.
document.querySelectorAll('.action-note[data-target]').forEach(note => {
    note.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = note.getAttribute('data-target');
        const menu = document.getElementById(id);
        if (!menu) return;
        const isHidden = menu.hasAttribute('hidden');
        // close any open menus first
        document.querySelectorAll('.context-action').forEach(m => m.setAttribute('hidden', ''));
        if (isHidden) {
            menu.removeAttribute('hidden');
        } else {
            menu.setAttribute('hidden', '');
        }
    });
});

// Close menus when clicking anywhere else
document.addEventListener('click', () => {
    document.querySelectorAll('.context-action').forEach(m => m.setAttribute('hidden', ''));
});

// Prevent clicks inside the menu from bubbling up and closing it
document.querySelectorAll('.context-action').forEach(menu => {
    menu.addEventListener('click', e => e.stopPropagation());
});


/////////////////////////////////////////////////////////////
document.querySelectorAll('.newNot-btn[data-target]').forEach(note => {
    note.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = note.getAttribute('data-target');
        const menu = document.getElementById(id);
        if (!menu) return;
        const isHidden = menu.hasAttribute('hidden');
        // close any open menus first
        document.querySelectorAll('.dropdown-new').forEach(m => m.setAttribute('hidden', ''));
        if (isHidden) {
            menu.removeAttribute('hidden');
        } else {
            menu.setAttribute('hidden', '');
        }
    });
});

// Close menus when clicking anywhere else
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-new').forEach(m => m.setAttribute('hidden', ''));
});

// Prevent clicks inside the menu from bubbling up and closing it
document.querySelectorAll('.dropdown-new').forEach(menu => {
    menu.addEventListener('click', e => e.stopPropagation());
});
/////////////////////////////////////////////////////////////




var nn;
nn = document.documentURI;








// ===== GESTION RESPONSIF OPTIMISÉE =====
let responsiveTimer = null;
function updateResponsiveLayout() {
    const width = window.innerWidth;
    const sidebar = document.getElementById("sidebar");
    const dashContent = document.getElementById("dashcontent");

    if (!sidebar || !dashContent) return;

    // Appliquer les calculs si l'écran est <= 768px (mobile)
    if (width <= 768) {
        const height = width - 1;
        const bottomOffset = height * 0.411;
        const leftOffset = height * 0.582;
        const marginTop = (height * 0.0845) + 'px';

        // Mise à jour du sidebar avec cssText (plus efficace)
        sidebar.style.cssText = `
            height: ${height}px;
            left: ${leftOffset}px;
            bottom: -${bottomOffset}px;
        `;

        // Mise à jour du contenu principal
        dashContent.style.height = window.innerHeight + 'px';

        // Mise à jour des marges des boutons en une seule boucle
        [btn_dash, btn_notes, btn_prog, btn_cate, btn_para].forEach(btn => {
            if (btn) btn.style.marginTop = marginTop;
        });

    } else {
        // Sur desktop (> 768px), utiliser les valeurs par défaut / auto
        sidebar.style.cssText = `
            height: 100vh;
            left: auto;
            bottom: auto;
        `;

        dashContent.style.height = '100vh';

        [btn_dash, btn_notes, btn_prog, btn_cate, btn_para].forEach(btn => {
            if (btn) btn.style.marginTop = 'auto';
        });
    }

    localStorage.setItem("currentWidth", width);
}

// Ajouter les event listeners une seule fois au chargement
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");

    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Sur mobile : afficher/masquer la barre
                if (searchInput.style.display === 'block') {
                    searchInput.style.display = 'none';
                } else {
                    searchInput.style.display = 'block';
                }
            } else {
                // Sur desktop : soumettre le formulaire
                searchBar.requestSubmit();
                alert("La fonction de recherche n'est pas encore implémentée.");
            }
        });
    }

    updateResponsiveLayout();
});

// Initialiser au chargement
document.addEventListener("DOMContentLoaded", updateResponsiveLayout);

// Ajouter listener au redimensionnement au lieu d'un setInterval
window.addEventListener('resize', () => {
    clearTimeout(responsiveTimer);
    responsiveTimer = setTimeout(updateResponsiveLayout, 150); // Debounce de 150ms
});

// ===== FONCTION POUR AFFICHER LE CONTENU DE LA NOTE EN NON-MODIFIABLE =====
/**
 * Affiche le contenu HTML de la note dans un élément non-modifiable
 * @param {string} noteHtml - Le contenu HTML de la note à afficher
 */
function displayNotePreview(noteHtml) {
    const previewElement = document.getElementById("preview-note-content");
    if (previewElement) {
        previewElement.innerHTML = noteHtml;
        // Calculer les statistiques
        updatePreviewStats(noteHtml);
    }
}

// ===== FONCTION POUR METTRE À JOUR LES STATISTIQUES DE LA PREVIEW =====
/**
 * Calcule et affiche le nombre de mots et caractères dans la preview
 * @param {string} noteHtml - Le contenu HTML
 */
function updatePreviewStats(noteHtml) {
    const text = noteHtml.replace(/<[^>]*>/g, '').replace(/\n$/, '');
    const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.replace(/\r/g, '').length;

    const previewWordCount = document.getElementById('preview-word-count');
    const previewCharCount = document.getElementById('preview-char-count');

    if (previewWordCount) previewWordCount.textContent = words;
    if (previewCharCount) previewCharCount.textContent = chars;
}

// ===== FONCTION POUR AFFICHER/MASQUER LA ZONE PREVIEW =====
/**
 * Affiche ou masque la zone preview selon l'état des sections
 * @param {boolean} show - true pour afficher, false pour masquer
 */
function toggleNotePreview(show = true) {
    const previewElement = document.getElementById("SecPreviewNote");
    if (previewElement) {
        if (show) {
            previewElement.removeAttribute("hidden");
        } else {
            previewElement.setAttribute("hidden", "");
        }
    }
}

// ===== FONCTION POUR CHARGER LE CONTENU DANS QUILL AVEC FORMATS PRÉSERVÉS =====
/**
 * Charge le contenu HTML dans Quill en préservant tous les formats
 * @param {object} quillInstance - L'instance Quill de l'éditeur
 * @param {string} noteHtml - Le contenu HTML à charger
 */
function loadNoteContentIntoQuill(quillInstance, noteHtml) {
    if (!quillInstance) {
        console.error('Quill instance not available');
        return;
    }
    // Charger le HTML directement dans l'éditeur Quill
    quillInstance.root.innerHTML = noteHtml;
    // Placer le curseur au début du document
    quillInstance.setSelection(0);
}

// ===== FONCTION POUR PASSER DE LA PREVIEW À L'ÉDITION =====
/**
 * Cache la preview, charge le contenu dans Quill et affiche la zone d'édition
 */
function switchToEditMode() {
    const currentNoteId = localStorage.getItem('current_note');

    // Masquer la preview
    toggleNotePreview(false);

    // Afficher la zone d'édition
    const editSection = document.getElementById("Sec-OpenNote");
    if (editSection) {
        // Mettre à jour l'ID dans la zone d'édition
        const noteIdElement = document.getElementById("Note-id");
        if (noteIdElement && currentNoteId) {
            noteIdElement.innerHTML = `Note ID: <code>${currentNoteId}/</code>`;
        }

        editSection.removeAttribute("hidden");
    }
}

function openNote(id) {
    fetch(`api/folder_api.php?folder_id=${localStorage.getItem("current_folder")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success !== false) {
                sec_folders.innerHTML = "";
                data.data.forEach(note => {

                    sec_folders.innerHTML += `
                     <div id="${note.id_note}" class="histori-conteza" ondblclick='openNote("${note.id_note}")'>
                            <div class="history-note">
                                <div style="display: flex; flex-direction:row;align-items: center;">
                                    <div>
                                        <h4 class="history-icon"><i class="fa-duotone fa-note-sticky"></i></h4>
                                    </div>
                                    <div style="display: flex; flex-direction:column;">
                                        <div class="history-title">&nbsp;<strong>${note.nom_note}</strong></div>
                                        <div style="display: flex; flex-direction: row;">
                                            <div id="history-note-content" class="history-note-content">${note.content_note}</div>
                                            <div>....</div>
                                        </div>
                                    </div>

                                </div>
                                <div class="action-note" data-target="context${note.id_note}">
                                    <strong>.</strong><strong>.</strong><strong>.</strong>
                                </div>
                            </div><br>
                            <div class="context-action" id="context${note.id_note}" hidden>
                                <ul>
                                    <li class="act" onclick='openNote("${note.id_note}")'>Ouvrir</li>
                                    <li class="act">Ouvrir le dossiers</li>
                                    <li class="act">Info</li>
                                </ul>
                            </div>
                        </div>
                `;

                });
            } else {
                sec_folders.innerHTML = `
                 <p style="text-align:center;">Aucun fichier pour le moment</p>

                    `
            }
            // Attach event listeners after all elements are added
            document.querySelectorAll('.action-note[data-target]').forEach(note => {
                note.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = note.getAttribute('data-target');
                    const menu = document.getElementById(id);
                    if (!menu) return;
                    const isHidden = menu.hasAttribute('hidden');
                    document.querySelectorAll('.context-action').forEach(m => m.setAttribute('hidden', ''));
                    if (isHidden) {
                        menu.removeAttribute('hidden');
                    }
                });
            });

        }).catch(error => {
            console.error('Error fetching folder data:', error);
        });

    document.querySelector(".loader-bkg").style.display = "block";
    console.log("Ouverture de la note qui a pour id =", id);
    sec_dash.style.display = "none"
    sec_notes.style.display = "block";
    sec_prog.style.display = "none"
    sec_cate.style.display = "none"
    sec_para.style.display = "none"
    document.getElementById("Sec-folder").style.display = "none"
    document.getElementById("Sec-folder").style.backgroundColor = "transparent";
    document.getElementById("sec-erreur").style.display = "none";

    // Masquer la zone d'édition (afficherla preview à la place)
    const editSection = document.getElementById("Sec-OpenNote");
    if (editSection) {
        editSection.setAttribute("hidden", "");
    }

    document.querySelector(".newan").style.display = "none";
    document.getElementById("folders-container").style.display = "none";
    if (location.pathname !== "/Notepad+/" || location.pathname !== "/Notepad+/index.php" && location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes" && uri.startsWith("/Notepad+/Mes_notes/folder/")) {
        console.log(uri);
        history.replaceState(null, null, `note/${id}`);
        console.log('history.replaceState ->', `note/${id}`);
        document.getElementById("Note-id-preview").innerHTML = `Note ID: <code>${id}/</code>`;
        localStorage.setItem("current_note", id);
    }
    // openNote(id);
    setTimeout(() => {
        document.querySelector(".loader-bkg").style.display = "none";

        // Récupérer le contenu HTML de la note
        const noteContentElement = document.querySelector(`#${id} #history-note-content`);
        if (noteContentElement) {
            const noteContentHtml = noteContentElement.innerHTML;
            console.log("Note content HTML loaded:", noteContentHtml);

            // Afficher dans la zone preview (pas en édition)
            displayNotePreview(noteContentHtml);

            // Charger aussi le contenu dans Quill pour une utilisation ultérieure
            loadNoteContentIntoQuill(quill, noteContentHtml);

            // Afficher la preview quand la note est ouverte
            toggleNotePreview(true);
        } else {
            console.error("Note content element not found for id:", id);
        }
    }, 1000);

}
function closeNote() {
    //  sec_dash.style.display = "none"
    // sec_notes.style.display = "block";
    // sec_prog.style.display = "none"
    // sec_cate.style.display = "none"
    // sec_para.style.display = "none"
    document.getElementById("Sec-folder").style.display = "block"
    document.getElementById("Sec-folder").style.backgroundColor = "transparent";
    document.getElementById("sec-erreur").style.display = "none";

    // Masquer la zone d'édition
    const editSection = document.getElementById("Sec-OpenNote");
    if (editSection) {
        editSection.setAttribute("hidden", "");
    }

    document.querySelector(".newan").style.display = "flex";

    // Masquer la preview quand on ferme la note
    toggleNotePreview(false);

    // Retourner à la liste des notes du dossier
    openFolder(localStorage.getItem("current_folder"));
}


// Fonction de gestion de l'ouverture des dossiers
function openFolder(folderId) {
    document.querySelector(".loader-bkg").style.display = "block";
    console.log(location.pathname);
    setTimeout(() => {
        document.querySelector(".loader-bkg").style.display = "none";
    }, 2000)
    console.log('openFolder called with folderId=', folderId, ' pathname=', location.pathname);
    sec_dash.style.display = "none"
    sec_notes.style.display = "block";
    sec_prog.style.display = "none"
    sec_cate.style.display = "none"
    sec_para.style.display = "none"
    document.getElementById("sec-erreur").style.display = "none";
    document.getElementById("Sec-folders").removeAttribute("hidden");
    document.getElementById("Sec-folder").style.backgroundColor = "white";
    folderInfo.removeAttribute("hidden");
    document.getElementById("Sec-searchResult").setAttribute("hidden", "");
    document.getElementById("folders-container").style.display = "none";
    if (location.pathname !== "/Notepad+/" || location.pathname !== "/Notepad+/index.php" && location.pathname !== "/Notepad+/parametre" && location.pathname !== "/Notepad+/categorie" && location.pathname !== "/Notepad+/programme" && location.pathname !== "/Notepad+/Mes_notes") {
        console.log(uri);
        history.replaceState(null, null, `Mes_notes/folder/${folderId}`);
        console.log('history.replaceState ->', `Mes_notes/folder/${folderId}`);
        document.getElementById("folder-name").innerHTML = `Dossier ID: <code>${folderId}/</code>`;
        localStorage.setItem("current_folder", folderId);
    }
    fetch(`api/folder_api.php?folder_id=${folderId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success !== false) {
                sec_folders.innerHTML = "";
                data.data.forEach(note => {
                    if (note.content_note === "") {
                        note.content_note = "*Vide*";
                    }
                    sec_folders.innerHTML += `
                     <div id="${note.id_note}" class="histori-conteza" ondblclick='openNote("${note.id_note}")'>
                            <div class="history-note">
                                <div style="display: flex; flex-direction:row;align-items: center;">
                                    <div>
                                        <h4 class="history-icon"><i class="fa-duotone fa-note-sticky"></i></h4>
                                    </div>
                                    <div style="display: flex; flex-direction:column;">
                                        <div class="history-title">&nbsp;<strong>${note.nom_note}</strong></div>
                                        <div style="display: flex; flex-direction: row;">
                                            <div id="history-note-content" class="history-note-content">${note.content_note}</div>
                                            
                                        </div>
                                    </div>

                                </div>
                                <div class="action-note" data-target="context${note.id_note}">
                                    <strong>.</strong><strong>.</strong><strong>.</strong>
                                </div>
                            </div>
                            <div class="context-action" id="context${note.id_note}" hidden>
                                <ul>
                                    <li class="act" onclick='openNote("${note.id_note}")'>Ouvrir</li>
                                    <li class="act">Ouvrir le dossier</li>
                                    <li class="act">Info</li>
                                </ul>
                            </div>
                        </div>
                `;

                });
            } else {
                sec_folders.innerHTML = `
                 <p style="text-align:center;">Aucun fichier pour le moment</p>

                    `
            }
            // Attach event listeners after all elements are added
            document.querySelectorAll('.action-note[data-target]').forEach(note => {
                note.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = note.getAttribute('data-target');
                    const menu = document.getElementById(id);
                    if (!menu) return;
                    const isHidden = menu.hasAttribute('hidden');
                    document.querySelectorAll('.context-action').forEach(m => m.setAttribute('hidden', ''));
                    if (isHidden) {
                        menu.removeAttribute('hidden');
                    }
                });
            });

            // Appeler clickNote pour gérer les cliques sur les notes
            clickNote();

        }).catch(error => {
            console.error('Error fetching folder data:', error);
        });
}
function closeFolder(folderId) {
    sec_dash.style.display = "none"
    sec_notes.style.display = "block";
    sec_prog.style.display = "none"
    sec_cate.style.display = "none"
    sec_para.style.display = "none"
    document.getElementById("sec-erreur").style.display = "none";
    document.getElementById("Sec-folders").setAttribute("hidden", true);
    document.getElementById("Sec-folder").style.backgroundColor = "transparent";
    folderInfo.setAttribute("hidden", true);
    document.getElementById("folders-container").style.display = "flex";
    history.replaceState(null, null, `Mes_notes/`);
    localStorage.removeItem("current_folder");
    sec_folders.innerHTML = "";
    sec_folders.setAttribute("hidden", true);
}


function generateFolderId() {
    let length = 14;
    const caractere = "ABCDEFGIJKLMOPKRSTUWXYZabcdefghijklmopkrstuwxyz0123456789";
    let Idgenerer = "";
    for (let i = 0; i < length; i++) {
        Idgenerer += caractere.charAt(Math.floor(Math.random() * caractere.length));

    }
    return Idgenerer
}
console.log(generateFolderId());

function alignLine() {
    document.querySelectorAll(".folder").forEach(fl => {
        fl.className = "folder line";
    });
    GetPreference("line");
}

function alignGrand() {
    document.querySelectorAll(".folder").forEach(fl => {
        fl.className = "folder grand";
    });
    GetPreference("grand");
}



document.addEventListener("DOMContentLoaded", () => {
    deleteElement();
    document.getElementById("Sec-folder").style.backgroundColor = "transparent";
    let jddd = '';
    let note_id;
    if (uri.startsWith("/Notepad+/Mes_notes/folder/")) {
        const parts = uri.split('/');
        // expected parts = ['', 'Notepad+', 'note', 'folder', '<id>']
        jddd = parts[4] || '';
    }
    clickFolders();
    clickNote(); // Appeler la fonction pour gérer les cliques sur les notes
    if (uri.startsWith("/Notepad+/note/")) {
        const parts = uri.split('/');
        note_id = parts[3] || '';
    }
    if (uri === "/Notepad+/Mes_notes" || uri === "/Notepad+/Mes_notes/") {
        affiNote();
        localStorage.removeItem("current_folder");
        localStorage.removeItem("clickedFolder");
        localStorage.setItem("FolderView", "line");
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (uri === "/Notepad+/programme" || uri === "/Notepad+/programme/") {
        affiprog();
        localStorage.removeItem("current_folder");
        localStorage.removeItem("clickedFolder");
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (uri === "/Notepad+/categorie" || uri === "/Notepad+/categorie/") {
        afficate();
        localStorage.removeItem("current_folder");
        localStorage.removeItem("clickedFolder");
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (uri === "/Notepad+/parametre" || uri === "/Notepad+/parametre/") {
        affipara();
        localStorage.removeItem("current_folder");
        localStorage.removeItem("clickedFolder");
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (uri === "/Notepad+/home" || uri === "/Notepad+/" || uri === "/Notepad+/home/") {
        affidash();
        localStorage.removeItem("current_folder");
        localStorage.removeItem("clickedFolder");
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (jddd.length === 14 && uri.startsWith("/Notepad+/Mes_notes/folder/")) {
        openFolder(jddd);
        document.getElementById("folder-name").innerHTML = `Dossier: <code>${jddd}/</code>`;
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else if (note_id.length == 19 && uri.startsWith("/Notepad+/note/")) {
        // openFolder(localStorage.getItem("current_folder"));
        openNote(note_id);
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    } else {
        affiErreurPage();
        console.log(location.pathname);
        setTimeout(() => {
            document.querySelector(".loader-bkg").style.display = "none";
        }, 2000);
    }

    if (localStorage.getItem("Preference")) {
        let prefs = localStorage.getItem("Preference");
        let prefsArray = prefs.split("]");
        prefsArray.forEach(pref => {
            if (pref.includes("FolderView")) {
                let parts = pref.split(":");
                let value = parts.length > 1 ? parts[1].trim() : "";
                if (value === " line") {
                    alignLine();
                } else if (value === " grand") {
                    alignGrand();
                }
            }
        });
    }
})

// ===== FUNCTIONS FOR CREATING NOTES AND FOLDERS =====

// Open Create Note Modal
function openCreateNoteModal() {
    document.getElementById("createNoteModal").removeAttribute("hidden");
    document.getElementById("createNoteModal").style.display = "flex";
    document.querySelectorAll('.dropdown-new').forEach(m => m.setAttribute('hidden', ''));
}

// Close Create Note Modal
function closeCreateNoteModal() {
    document.getElementById("createNoteModal").setAttribute("hidden", "");
    document.getElementById("createNoteModal").style.display = "none";
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
}

// Submit New Note
function submitNote() {
    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();

    if (!title) {
        alert("Veuillez entrer un titre");
        return;
    }

    const data = {
        nom_note: title,
        content_note: content,
        id_folder: localStorage.getItem("current_folder")
    };

    fetch("api/create_note.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Note créée avec succès!");
                closeCreateNoteModal();
                openFolder(localStorage.getItem("current_folder")); // Reload to show new note
            } else {
                alert("Erreur: " + result.message);
            }
        })
        .catch(error => {
            console.error("Erreur lors de la création de la note:", error);
            alert("Erreur lors de la création de la note");
        });
}

// Open Create Folder Modal
function openCreateFolderModal() {
    document.getElementById("createFolderModal").removeAttribute("hidden");
    document.getElementById("createFolderModal").style.display = "flex";
    document.querySelectorAll('.dropdown-new').forEach(m => m.setAttribute('hidden', ''));
}
// Open Update Folder Modal (separate helper if needed)
function openUpdateFolderModal() {
    document.getElementById("updateFolderModal").removeAttribute("hidden");
    document.getElementById("updateFolderModal").style.display = "flex";
    document.querySelectorAll('.dropdown-new').forEach(m => m.setAttribute('hidden', ''));
}


// Close Create Folder Modal
function closeCreateFolderModal() {
    document.getElementById("createFolderModal").setAttribute("hidden", "");
    document.getElementById("createFolderModal").style.display = "none";
    document.getElementById("folderTitle").value = "";
}

// Close Update Folder Modal
function closeUpdateFolderModal() {
    document.getElementById("updateFolderModal").setAttribute("hidden", "");
    document.getElementById("updateFolderModal").style.display = "none";
    document.getElementById("RefolderTitle").value = "";
}

// Submit New Folder
function submitFolder() {
    const folderName = document.getElementById("folderTitle").value.trim();

    if (!folderName) {
        alert("Veuillez entrer un nom de dossier");
        return;
    }

    const data = {
        nom_folder: folderName,
        id_folder: generateFolderId()
    };

    fetch("api/create_folder.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Dossier créé avec succès!");
                closeCreateFolderModal();
                location.reload(); // Reload to show new folder
            } else {
                alert("Erreur: " + result.message);
            }
        })
        .catch(error => {
            console.error("Erreur lors de la création du dossier:", error);
            alert("Erreur lors de la création du dossier");
        });
}

function updade_folder() {
    let id_folder = JSON.parse(localStorage.getItem("clickedFolder"));
    if (!id_folder || !id_folder[0]) {
        alert("Veuillez sélectionner un dossier");
        return;
    }

    // Use the visible strong containing the folder name
    const el = document.querySelector("#" + id_folder[0] + " .folder-name .folder_real_name");
    const folder_name = el.textContent.trim();
    document.getElementById("RefolderTitle").value = folder_name;
    // Show the update modal
    document.getElementById("updateFolderModal").removeAttribute("hidden");
    document.getElementById("updateFolderModal").style.display = "flex";
}

function submitUpdateFolder() {
    const folderName = document.getElementById("RefolderTitle").value.trim();

    if (!folderName) {
        alert("Veuillez entrer un nom de dossier");
        return;
    }

    let id_folder = JSON.parse(localStorage.getItem("clickedFolder"));
    const data = {
        id_folder: id_folder[0],
        nom_folder: folderName
    };

    fetch("api/update_folder.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Dossier mis à jour avec succès!");
                closeUpdateFolderModal();
                location.reload();
            } else {
                alert("Erreur: " + result.message);
            }
        })
        .catch(error => {
            console.error("Erreur lors de la mise à jour du dossier:", error);
            alert("Erreur lors de la mise à jour du dossier");
        });
}

let folder_name = document.querySelectorAll(".folder-name .folderStrong_name");
var folder;
//  alert(folder_name);

function clickFolders() {
    folder_name.forEach(e => {
        let jjo = e.textContent;
        let FolderIdCli = e.parentElement.parentElement.parentElement.id;
        if (e.textContent.length > 15) {
            e.parentElement.parentElement.parentElement.addEventListener("focus", (event) => {


                console.log('clickFolders: clicked (long name) ->', jjo);
                if (e.parentElement.parentElement.parentElement.className == "folder grand") {
                    if (!document.querySelector(".FolderActive")) {
                        e.parentElement.parentElement.parentElement.classList = "folder " + localStorage.getItem("FolderView") + " FolderActive";
                    }
                    if (e.parentElement.parentElement.parentElement.classList == "folder " + localStorage.getItem("FolderView") + " FolderActive") {
                        DeselectAll();
                        e.parentElement.parentElement.parentElement.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
                    }
                    e.textContent = jjo;
                } else {
                    if (!document.querySelector(".FolderActive")) {
                        e.parentElement.parentElement.parentElement.classList = "folder " + localStorage.getItem("FolderView") + " FolderActive";
                    }
                    if (e.parentElement.parentElement.parentElement.classList == "folder " + localStorage.getItem("FolderView") + " FolderActive") {
                        DeselectAll();
                        e.parentElement.parentElement.parentElement.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
                    }
                }

                if (event.ctrlKey) {
                    let clicked = JSON.parse(localStorage.getItem("clickedFolder")) || [];
                    if (!clicked.includes(FolderIdCli)) {
                        clicked.push(FolderIdCli);
                    }
                    localStorage.setItem("clickedFolder", JSON.stringify(clicked));
                } else {
                    localStorage.setItem("clickedFolder", JSON.stringify([FolderIdCli]));
                }

            });
            e.parentElement.lastElementChild.textContent = jjo;
            let nui = e.textContent.substring(0, 12);
            e.textContent = nui + "...";
        } else {
            if (e.textContent.length <= 15) {
                e.parentElement.parentElement.parentElement.addEventListener("focus", (event) => {
                    console.log('clickFolders: clicked ->', jjo);
                    if (!document.querySelector(".FolderActive")) {
                        e.parentElement.parentElement.parentElement.classList = "folder " + localStorage.getItem("FolderView") + " FolderActive";
                    }
                    if (e.parentElement.parentElement.parentElement.classList == "folder " + localStorage.getItem("FolderView") + " FolderActive") {
                        DeselectAll();
                        e.parentElement.parentElement.parentElement.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
                    }
                    if (event.ctrlKey) {
                        let clicked = JSON.parse(localStorage.getItem("clickedFolder")) || [];
                        if (!clicked.includes(FolderIdCli)) {
                            clicked.push(FolderIdCli);
                        }
                        e.parentElement.parentElement.parentElement.classList = "folder " + localStorage.getItem("FolderView") + " FolderActive";
                        localStorage.setItem("clickedFolder", JSON.stringify(clicked));
                    } else {
                        localStorage.setItem("clickedFolder", JSON.stringify([FolderIdCli]));
                    }
                });
                e.textContent = jjo;
            }
        }
    })
}
function DeselectAll() {
    document.querySelectorAll('.folder').forEach(m => {
        m.classList = "folder " + localStorage.getItem("FolderView");
        localStorage.removeItem("clickedFolder");
        if (m.className == ".line") {
            m.style.cssText = `
         background-color: white;
        `;
        } else {
            m.style.cssText = `
         background-color: none;
        `;
        }



    });
}
document.addEventListener('click', () => {
    document.querySelectorAll('.folder').forEach(m => {
        m.classList = "folder " + localStorage.getItem("FolderView");
        localStorage.removeItem("clickedFolder");
        if (m.className == ".line") {
            m.style.cssText = `
         background-color: white;
        `;
        } else {
            m.style.cssText = `
         background-color: none;
        `;
            clickFolders();
        }



    });

});

document.querySelectorAll('.folder').forEach(menu => {
    menu.addEventListener('click', e => e.stopPropagation());
});
document.querySelectorAll(".tools span").forEach(tools => {
    tools.addEventListener("click", e => e.stopPropagation());
});
// Prevent clicks inside modals from propagating to underlying elements (folders)
document.querySelectorAll('.modal').forEach(modal => {
    // stop clicks on the modal overlay and content from bubbling up
    modal.addEventListener('click', e => e.stopPropagation());
    const content = modal.querySelector('.modal-content');
    if (content) content.addEventListener('click', e => e.stopPropagation());
});

// Fonction pour gerer la préference de l'affichage des dossieer
function GetPreference(PrefVal) {
    var FolderView;
    FolderView = PrefVal;
    var exist = localStorage.getItem("FolderView") || "";
    switch (exist) {
        case "grand":
            if (FolderView == "grand") {
                return;
            } else {
                localStorage.removeItem("FolderView");
                localStorage.setItem("FolderView", FolderView);
            }
            break;
        case "line":
            if (FolderView == "line") {
                return;
            } else {
                localStorage.removeItem("FolderView");
                localStorage.setItem("FolderView", FolderView);
            }
            break;
        default:
            localStorage.removeItem("FolderView");
            localStorage.setItem("FolderView", FolderView);
            break;
    }

    // console.log(PreferenceTab);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("FolderView")) {
        let pref = localStorage.getItem("FolderView");
        if (pref === " line") {
            alignLine();
            alert("line");
        } else if (pref === "grand") {
            alignGrand();
        }
    }
});






// Quill editor integration (replaces previous custom contenteditable editor)
const quillEditorEl = document.getElementById('quill-editor');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');
const hiddenTextarea = document.getElementById('noteTextarea');
let quill = null;

if (quillEditorEl && window.Quill) {
    quill = new Quill('#quill-editor', {
        theme: 'snow',
        modules: { toolbar: '#quill-toolbar' }
    });
    quill.on('text-change', () => updateStats());
    updateStats();
}

function updateStats() {
    if (!quill) return;
    const text = (quill.getText() || '').replace(/\n$/, '');
    const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.replace(/\r/g, '').length;
    if (wordCountEl) wordCountEl.textContent = words;
    if (charCountEl) charCountEl.textContent = chars;
}

function getEditorContentForDB() {
    if (quill) {
        let html = quill.root.innerHTML || '';
        html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
        const text = quill.getText() || '';
        return { html: html.trim(), text: text.trim() };
    }
    return { html: '', text: '' };
}

// ===== FONCTION POUR ACTUALISER L'AFFICHAGE APRÈS SAUVEGARDE =====
/**
 * Actualise le contenu du dossier et met à jour la preview sans recharger la page
 */
function refreshNoteDisplay() {
    const currentFolderId = localStorage.getItem('current_folder');
    const currentNoteId = localStorage.getItem('current_note');

    if (currentFolderId) {
        // Recharger les notes du dossier
        openFolder(currentFolderId);
    }

    if (currentNoteId) {
        // Recharger la preview de la note actuelle
        const noteContentElement = document.querySelector(`#${currentNoteId} #history-note-content`);
        if (noteContentElement) {
            const noteContentHtml = noteContentElement.innerHTML;
            displayNotePreview(noteContentHtml);
        }
    }
}

// ===== FONCTION POUR GÉRER LA VISIBILITÉ DE LA ZONE PREVIEW =====
/**
 * Affiche ou masque la zone preview selon l'état des sections
 * @param {boolean} show - true pour afficher, false pour masquer
 */
function toggleNotePreview(show = true) {
    const previewElement = document.getElementById("SecPreviewNote");
    if (previewElement) {
        if (show) {
            previewElement.removeAttribute("hidden");
            previewElement.style.display = "block";
        } else {
            previewElement.setAttribute("hidden", "");
            previewElement.style.display = "none";
        }
    }
}

function saveEditorContent() {
    const html = quill.root.innerHTML || '';
    const text = quill.getText() || '';
    const btn = document.querySelector('#save_note_btn');
    const oldBtnText = btn ? btn.textContent : '';

    function showTemp(text, ms = 1200) {
        if (btn) btn.textContent = text;
        setTimeout(() => { if (btn) btn.textContent = oldBtnText; }, ms);
    }

    const currentNote = localStorage.getItem('current_note');
    if (currentNote) {
        fetch('api/update_note.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_note: currentNote, content_note: html, content_text: text })
        }).then(r => r.json())
            .then(resp => {
                if (resp && resp.success) {
                    showTemp('Enregistré');
                    // Rafraîchir l'affichage sans recharger la page
                    refreshNoteDisplay();
                } else {
                    console.error('Update failed', resp);
                    showTemp('Erreur', 2000);
                    alert('Erreur lors de la sauvegarde');
                }
            }).catch(err => {
                console.error('Save error', err);
                showTemp('Erreur', 2000);
                alert('Erreur lors de la sauvegarde');
            });
    } else {
        const folderId = localStorage.getItem('current_folder') || null;
        const payload = { nom_note: 'Untitled', content_note: html, id_folder: folderId };
        fetch('api/create_note.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(r => r.json())
            .then(resp => {
                if (resp && resp.success) {
                    if (resp.id_note) localStorage.setItem('current_note', resp.id_note);
                    showTemp('Créé');
                    // Rafraîchir l'affichage et mettre à jour la preview
                    if (folderId) {
                        openFolder(folderId);
                        setTimeout(() => {
                            refreshNoteDisplay();
                        }, 500);
                    }
                } else {
                    console.error('Create failed', resp);
                    showTemp('Erreur', 2000);
                    alert('Erreur lors de la création de la note');
                }
            }).catch(err => {
                console.error('Create error', err);
                showTemp('Erreur', 2000);
                alert('Erreur lors de la création de la note');
            });
    }
}





// ===== FONCTION DE GESTION DES CLIQUES SUR LES NOTES =====
/**
 * Gère la sélection des notes avec support de Ctrl+Click pour multi-sélection
 */
function clickNote() {
    const notes = document.querySelectorAll(".histori-conteza");

    notes.forEach(noteElement => {
        // Rendre l'élément focusable
        noteElement.setAttribute("tabindex", "0");

        noteElement.addEventListener("focus", (event) => {
            const noteId = noteElement.id;
            console.log('clickNote: clicked ->', noteId);

            // Marquer comme actif
            if (!document.querySelector(".NoteActive")) {
                noteElement.classList.add("NoteActive");
            }
            if (noteElement.classList.contains("NoteActive")) {
                DeselectAllNotes();
                noteElement.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
            }

            // Gestion de la multi-sélection avec Ctrl
            if (event.ctrlKey) {
                let clicked = JSON.parse(localStorage.getItem("clickedNotes")) || [];
                if (!clicked.includes(noteId)) {
                    clicked.push(noteId);
                }
                localStorage.setItem("clickedNotes", JSON.stringify(clicked));
            } else {
                localStorage.setItem("clickedNotes", JSON.stringify([noteId]));
            }
        });

        // Permettre les focus par clic
        noteElement.addEventListener("click", () => {
            noteElement.focus();
        });
    });
}

/**
 * Déselectionne toutes les notes
 */
function DeselectAllNotes() {
    document.querySelectorAll('.histori-conteza').forEach(note => {
        note.classList.remove("NoteActive");
        localStorage.removeItem("clickedNotes");
        note.style.backgroundColor = "white";
    });
}

// ===== FONCTIONS POUR COPIER/COUPER/COLLER LES NOTES =====
/**
 * Copie les notes sélectionnées vers le presse-papiers
 */
function copyNotes() {
    const clickedNotes = JSON.parse(localStorage.getItem("clickedNotes"));
    if (!clickedNotes || clickedNotes.length === 0) {
        alert("Veuillez sélectionner au moins une note à copier");
        return;
    }

    localStorage.setItem("copiedNotes", JSON.stringify(clickedNotes));
    localStorage.removeItem("cutNotes");
    alert(`${clickedNotes.length} note(s) copiée(s)`);
}

/**
 * Coupe les notes sélectionnées vers le presse-papiers
 */
function cutNotes() {
    const clickedNotes = JSON.parse(localStorage.getItem("clickedNotes"));
    if (!clickedNotes || clickedNotes.length === 0) {
        alert("Veuillez sélectionner au moins une note à couper");
        return;
    }

    localStorage.setItem("cutNotes", JSON.stringify(clickedNotes));
    localStorage.removeItem("copiedNotes");
    alert(`${clickedNotes.length} note(s) coupée(s)`);
}

/**
 * Colle les notes copiées ou coupées vers le dossier actuel
 */
function pasteNotes() {
    const currentFolderId = localStorage.getItem("current_folder");
    if (!currentFolderId) {
        alert("Veuillez ouvrir un dossier d'abord");
        return;
    }

    const copiedNotes = JSON.parse(localStorage.getItem("copiedNotes")) || [];
    const cutNotes = JSON.parse(localStorage.getItem("cutNotes")) || [];
    const isCut = cutNotes.length > 0;
    const notesToPaste = isCut ? cutNotes : copiedNotes;

    if (notesToPaste.length === 0) {
        alert("Aucune note à coller. Veuillez d'abord copier ou couper des notes");
        return;
    }

    // Envoyer les notes au serveur
    fetch("api/paste_notes.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            note_ids: notesToPaste,
            target_folder_id: currentFolderId,
            is_cut: isCut
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`${notesToPaste.length} note(s) collée(s) avec succès`);

                // Nettoyer le presse-papiers
                if (isCut) {
                    localStorage.removeItem("cutNotes");
                }
                localStorage.removeItem("clickedNotes");

                // Recharger le dossier
                openFolder(currentFolderId);
            } else {
                alert("Erreur lors du collage: " + data.message);
            }
        })
        .catch(err => {
            console.error('Paste error', err);
            alert('Erreur lors du collage des notes');
        });
}

// ===== FONCTION DE SUPPRESSION AVEC MODAL DE CONFIRMATION =====
/**
 * Affiche un modal de confirmation pour la suppression
 */
function showDeleteConfirmationModal(type, itemName) {
    const modal = document.getElementById("deleteConfirmationModal");
    const messageElement = document.getElementById("deleteMessage");

    messageElement.innerHTML = `Êtes-vous sûr de vouloir supprimer <strong>${itemName}</strong> ?<br>Cette action est irréversible.`;

    // Stocker le type de suppression dans le data attribute
    modal.setAttribute("data-delete-type", type);

    modal.removeAttribute("hidden");
    modal.style.display = "flex";
}

/**
 * Ferme le modal de confirmation
 */
function closeDeleteConfirmationModal() {
    const modal = document.getElementById("deleteConfirmationModal");
    modal.setAttribute("hidden", "");
    modal.style.display = "none";
}

function deleteElement() {
    var delete_btn = document.querySelector(".tools span .fa-trash").parentElement;
    delete_btn.addEventListener("click", () => {
        var selectedFolder = JSON.parse(localStorage.getItem("clickedFolder"));
        if (selectedFolder) {
            const folderElement = document.getElementById(selectedFolder[0]);
            const folderName = folderElement.querySelector(".folderStrong_name")?.textContent || "Dossier";
            showDeleteConfirmationModal("folder", folderName);

            // Stocker l'ID du dossier à supprimer
            localStorage.setItem("itemToDelete", selectedFolder[0]);
        }
    });
}

// ===== FONCTION DE SUPPRESSION CONFIRMÉE =====
function confirmDelete() {
    const modal = document.getElementById("deleteConfirmationModal");
    const deleteType = modal.getAttribute("data-delete-type");
    const itemId = localStorage.getItem("itemToDelete");

    if (deleteType === "folder") {
        deleteFolder(itemId);
    } else if (deleteType === "note") {
        deleteNote(itemId);
    }

    closeDeleteConfirmationModal();
    localStorage.removeItem("itemToDelete");
}

function deleteFolder(folderId) {
    var donne = { request: "delete_folder", id: folderId };

    fetch('api/delete_all.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donne)
    })
        .then(r => r.json())
        .then(resp => {
            if (resp && resp.success) {
                alert("Dossier supprimé avec succès");
                document.location.href = "Mes_notes/";
            } else {
                alert("Erreur: " + resp.message);
            }
        })
        .catch(err => {
            console.error('Delete error', err);
            alert('Erreur lors de la suppression du dossier');
        });
}

function deleteNote(noteId) {
    var donne = { request: "delete_note", id: noteId };

    fetch('api/delete_all.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donne)
    })
        .then(r => r.json())
        .then(resp => {
            if (resp && resp.success) {
                alert("Note supprimée avec succès");
                openFolder(localStorage.getItem("current_folder"));
            } else {
                alert("Erreur: " + resp.message);
            }
        })
        .catch(err => {
            console.error('Delete error', err);
            alert('Erreur lors de la suppression de la note');
        });
}

//Focntion de gestion de la recherche
// Fonction de gestion de la recherche
function searchAll() {
    const query = document.getElementById("search");
    query.addEventListener("input", () => {
        const searchTerm = query.value.trim().toLowerCase();
        const sec_search = document.getElementById("Sec-searchResult");
        const search_container = document.querySelector(".research-container");
        
        // Mettre à jour la query affichée
        document.getElementById("research-query").textContent = JSON.stringify(searchTerm);

        // Si le champ est vide, revenir à l'état précédent
        if (searchTerm === "") {
            // Masquer les résultats de recherche
            sec_search.setAttribute("hidden", "");
            
            // Réafficher la section Notes avec ses sous-éléments
            sec_notes.style.display = "block";
            document.getElementById("Sec-folders").removeAttribute("hidden");
            document.getElementById("Sec-folder").removeAttribute("hidden");
            document.getElementById("Sec-folder").style.backgroundColor = "transparent";
            folderContainer.style.display = "flex";
            folderInfo.setAttribute("hidden", "")
            sec_search.style.display = "none";
            
            // Masquer les autres sections
            sec_dash.style.display = "none"
            sec_prog.style.display = "none"
            sec_cate.style.display = "none"
            sec_para.style.display = "none"
            document.getElementById("sec-erreur").style.display = "none";
            
            // Mettre à jour l'URL
            history.replaceState(null, null, 'Mes_notes');
            return;
        }

        // Configuration pour afficher la recherche
        folderContainer.style.display = "none";
        sec_search.removeAttribute("hidden");
        sec_search.style.display = "block";

        // Masquer TOUTES les autres sections
        sec_dash.style.display = "none";
        sec_dash.setAttribute("hidden", "");
        
        sec_notes.style.display = "block"; // Garder la section notes active
        
        sec_prog.style.display = "none";
        sec_prog.setAttribute("hidden", "");
        
        sec_cate.style.display = "none";
        sec_cate.setAttribute("hidden", "");
        
        sec_para.style.display = "none";
        sec_para.setAttribute("hidden", "");
        
        document.getElementById("sec-erreur").style.display = "none";
        document.getElementById("sec-erreur").setAttribute("hidden", "");
        
        document.getElementById("Sec-folders").setAttribute("hidden", "");
        document.getElementById("Sec-folders").style.display = "none";
        
        document.getElementById("Sec-folder").setAttribute("hidden", "");
        document.getElementById("Sec-folder").style.display = "none";
        
        folderInfo.setAttribute("hidden", "");
        folderInfo.style.display = "none";

        // Mettre à jour l'URL sans recharger
        history.replaceState(null, null, `Mes_notes/search/${encodeURIComponent(searchTerm)}`);

        // Effectuer la recherche
        fetch(`api/search.php?query=${searchTerm}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success !== false && data.data.notes) {
                    search_container.innerHTML = "";
                    search_container.innerHTML = "<h3>Notes trouvées:</h3>";
                    
                    if (data.data.notes.length <= 0) {
                        search_container.innerHTML += `
                            <p style="text-align:center;">Aucun Résultat</p>`;
                    } else {
                        data.data.notes.forEach(note => {
                            search_container.innerHTML += `
                                <div id="${note.id_note}" class="histori-conteza" ondblclick='openNote("${note.id_note}")'>
                                    <div class="history-note">
                                        <div style="display: flex; flex-direction:row;align-items: center;">
                                            <div>
                                                <h4 class="history-icon"><i class="fa-duotone fa-note-sticky"></i></h4>
                                            </div>
                                            <div style="display: flex; flex-direction:column;">
                                                <div class="history-title">&nbsp;<strong>${note.nom_note}</strong></div>
                                                <div style="display: flex; flex-direction: row;">
                                                    <div id="history-note-content" class="history-note-content">${note.content_note}</div>
                                                    <div>....</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="action-note" data-target="context${note.id_note}">
                                            <strong>.</strong><strong>.</strong><strong>.</strong>
                                        </div>
                                    </div><br>
                                    <div class="context-action" id="context${note.id_note}" hidden>
                                        <ul>
                                            <li class="act" onclick='openNote("${note.id_note}")'>Ouvrir</li>
                                            <li class="act">Ouvrir le dossiers</li>
                                            <li class="act">Info</li>
                                        </ul>
                                    </div>
                                </div>`;
                        });
                    }
                    
                    if (data.data.folders) {
                        search_container.innerHTML += "<h3>Dossiers trouvés:</h3>";
                        if (data.data.folders.length <= 0) {
                            search_container.innerHTML += `
                                <p style="text-align:center;">Aucun Résultat</p>`;
                        } else {
                            data.data.folders.forEach(folder => {
                                search_container.innerHTML += `
                                    <div id="${folder.id_folder}" class="histori-conteza" ondblclick='openFolder("${folder.id_folder}")'>
                                        <div class="history-note">
                                            <div style="display: flex; flex-direction:row;align-items: center;">
                                                <div>
                                                    <h4 class="history-icon"><i class="fa-duotone fa-folder"></i></h4>
                                                </div>
                                                <div style="display: flex; flex-direction:column;">
                                                    <div class="history-title">&nbsp;<strong>${folder.nom_folder}</strong></div>
                                                </div>
                                            </div>
                                            <div class="action-note" data-target="context${folder.id_folder}">
                                                <strong>.</strong><strong>.</strong><strong>.</strong>
                                            </div>
                                        </div><br>
                                        <div class="context-action" id="context${folder.id_folder}" hidden>
                                            <ul>
                                                <li class="act" onclick='openFolder("${folder.id_folder}")'>Ouvrir</li>
                                                <li class="act">Info</li>
                                            </ul>
                                        </div>
                                    </div>`;
                            });
                        }
                    }
                } else if (data.success == false) {
                    search_container.innerHTML = `
                        <p style="text-align:center;">Aucun Résultat</p>`;
                }
                
                // Réattacher les event listeners après ajout des éléments
                document.querySelectorAll('.action-note[data-target]').forEach(note => {
                    note.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const id = note.getAttribute('data-target');
                        const menu = document.getElementById(id);
                        if (!menu) return;
                        const isHidden = menu.hasAttribute('hidden');
                        document.querySelectorAll('.context-action').forEach(m => m.setAttribute('hidden', ''));
                        if (isHidden) {
                            menu.removeAttribute('hidden');
                        }
                    });
                });
            })
            .catch(error => {
                console.error('Erreur lors de la recherche:', error);
            });
    });
}
searchAll();














