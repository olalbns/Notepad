<!DOCTYPE html>
<html lang="fr" id="html">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/Notepad+/">
    <title>Notepad+</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="font-awesome-6-pro-main/css/all.min.css">
    <link rel="stylesheet" href="font-awesome-6-pro-main/css/fontawesome.min.css">
    <link href="quill.snow.css" rel="stylesheet">
</head>


<body id="n">
    <div class="loader-bkg">
        <div class="loader">
            <div style="    width: auto; margin: auto; margin-bottom: 25%;">
                <div class="ecrire">
                    <h3>NotePad<span class="pink">+</span></h3>
                </div>
                <p style="text-align: center;">Chargement en cours...</p>

            </div>

        </div>
    </div>

    <!-- Modal de confirmation de suppression -->
    <div id="deleteConfirmationModal" class="modal-confirmation" hidden>
        <div class="modal-confirmation-content">
            <div class="modal-confirmation-header">
                <h3>Confirmer la suppression</h3>
                <i onclick="closeDeleteConfirmationModal()" class="fa-duotone fa-times" style="cursor: pointer; font-size: 24px;"></i>
            </div>
            <div class="modal-confirmation-body">
                <p id="deleteMessage">Êtes-vous sûr de vouloir supprimer cet élément ?</p>
            </div>
            <div class="modal-confirmation-footer">
                <button class="btn-cancel" onclick="closeDeleteConfirmationModal()">Annuler</button>
                <button class="btn-delete" onclick="confirmDelete()">Supprimer</button>
            </div>
        </div>
    </div>

    <main title="contenue principale">
        <div class="container">
            <div class="header" title="Header de la page">


            </div>
            <div class="dashbody">
                <div id="sidebar" class="sidebar sidebar-close">
                    <div class="logo">
                        <h1><span id="logo-name">N</span><span class="pink">+</span></h1>
                    </div><br>
                    <div class="links-cont">
                        <div class="sidelink " id="Dash" title="Acceuil" role="button"><span class="sideicon"><i
                                    class="fa-duotone fa-home"></i>
                            </span>
                            <span class="sidelinkname">Acceuil</span>
                        </div>
                        <div class="sidelink " id="Notes" title="Mes_notes" role="button"><span class="sideicon"><i
                                    class="fa-duotone fa-pencil"></i>
                            </span>
                            <span class="sidelinkname">Mes_notes</span>
                        </div>
                        <div class="sidelink " id="Prog"><span class="sideicon"><i class="fa-duotone fa-calendar"></i>
                            </span>
                            <span class="sidelinkname">Mes programme</span>
                        </div>
                        <div class="sidelink " id="Cate"><span class="sideicon"><i class="fa-duotone fa-list"></i>
                            </span>
                            <span class="sidelinkname">Categorie</span>
                        </div>
                        <div class="sidelink  " id="Para"><span class="sideicon"><i class="fa-duotone fa-gear"></i>
                            </span>
                            <span class="sidelinkname">Parametre</span>
                        </div>

                    </div>
                    <div onclick='document.getElementById("sidebar").classList="sidebar sidebar-open"; document.getElementById("logo-name").textContent="Notepad"'
                        class=" sidebar-btn"><i class="fa-duotone fa-arrow-alt-right"></i></div>
                </div>
                <div id="dashcontent" class="dashcontent">


                    <?php
                    $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

                    $routes = [
                        "home" => 'Notepad+/index.php',
                        'Notepad+/Mes_notes' => 'Notepad+/Mes_notes.php',
                        'Notepad+/programme' => 'Notepad+/programme.php',
                        'Notepad+/categorie' => 'Notepad+/categorie.php',
                        'Notepad+/parametre' => 'Notepad+/parametre.php',
                        'Notepad+/Mes_notes/folder' => 'Notepad+/Mes_notes/folder.php'
                    ];

                    if (!array_key_exists($uri, $routes)) {
                    }

                    ?>


                    <div id="sec-erreur" class="sec-erreur" hidden>
                        <img class="error-img" src="assets/img/NoConnection.scale-200.png" alt="">
                        <h1 class="error-ntf">Erreur: 404</h1>
                        <span>Not Found</span>
                        <p>La page demander n'existe pas, verifier l'url</p>
                    </div>

                    <div id="Sec-dash" style="margin:10px;">
                        <div class="title">
                            <h1>Bienvenue <span class="pink">User</span></h1>
                        </div>
                        <div class="outils">
                            <div class="cart-cont">
                                <div class="card">
                                    <div class="lineFst">
                                        <div class="ico">
                                            <h2><i class="fa-duotone fa-calendar"></i></h2>
                                        </div>
                                        <div class="number">
                                            <h2>0</h2>
                                        </div>
                                    </div>
                                    <div class="lineScd">
                                        <h5>Programme</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="lineFst">
                                        <div class="ico">
                                            <h2><i class="fa-duotone fa-note-medical"></i></h2>
                                        </div>
                                        <div class="number">
                                            <h2>0</h2>
                                        </div>
                                    </div>
                                    <div class="lineScd">
                                        <h5>Mes_notes</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="lineFst">
                                        <div class="ico">
                                            <h2><i class="fa-duotone fa-calendar"></i></h2>
                                        </div>
                                        <div class="number">
                                            <h2>0</h2>
                                        </div>
                                    </div>
                                    <div class="lineScd">
                                        <h5>Tous</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="history">
                            <h2>Historique</h2>
                            <div class="histoContainer">
                                <div class="histoElement">
                                    <div class="histo-date"><span class="manip-1"><strong>17/10/2005</strong></span><br>
                                        <div class="histori-conteza">
                                            <div class="history-note">
                                                <div>
                                                    <div class="history-title">
                                                        <h4><i class="fa-duotone fa-note-sticky"></i>&nbsp;Finir le
                                                            projet
                                                        </h4>
                                                    </div>
                                                    <div style="display: flex; flex-direction: row;">
                                                        <div class="history-note-content">Finir le projet tontine avant
                                                            la
                                                            fin
                                                            de la
                                                            semaine</div>
                                                        <div>....</div>
                                                    </div>
                                                </div>
                                                <div class="action-note" data-target="context2">
                                                    <strong>.</strong><strong>.</strong><strong>.</strong>

                                                </div>

                                            </div>
                                            <div class="context-action" id="context2" hidden>
                                                <ul>
                                                    <li class="act">Ouvrir</li>
                                                    <li class="act">Ouvrir le dossier</li>
                                                    <li class="act">Info</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="histori-conteza">
                                            <div class="history-note">
                                                <div>
                                                    <div class="history-title">
                                                        <h4><i class="fa-duotone fa-note-sticky"></i>&nbsp;Finir le
                                                            projet
                                                        </h4>
                                                    </div>
                                                    <div style="display: flex; flex-direction: row;">
                                                        <div class="history-note-content">Finir le projet tontine avant
                                                            la
                                                            fin
                                                            de la
                                                            semaine</div>
                                                        <div>....</div>
                                                    </div>
                                                </div>
                                                <div class="action-note" data-target="context3">
                                                    <strong>.</strong><strong>.</strong><strong>.</strong>

                                                </div>

                                            </div>
                                            <div class="context-action" id="context3" hidden>
                                                <ul>
                                                    <li class="act">Ouvrir</li>
                                                    <li class="act">Ouvrir le dossier</li>
                                                    <li class="act">Info</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="histori-conteza">
                                            <div class="history-note">
                                                <div>
                                                    <div class="history-title">
                                                        <h4><i class="fa-duotone fa-note-sticky"></i>&nbsp;Finir le
                                                            projet
                                                        </h4>
                                                    </div>
                                                    <div style="display: flex; flex-direction: row;">
                                                        <div class="history-note-content">Finir le projet tontine avant
                                                            la
                                                            fin
                                                            de la
                                                            semaine</div>
                                                        <div>....</div>
                                                    </div>
                                                </div>
                                                <div class="action-note" data-target="context4">
                                                    <strong>.</strong><strong>.</strong><strong>.</strong>

                                                </div>

                                            </div>
                                            <div class="context-action" id="context4" hidden>
                                                <ul>
                                                    <li class="act">Ouvrir</li>
                                                    <li class="act">Ouvrir le dossier</li>
                                                    <li class="act">Info</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="histo-date"><span class="manip-1"><strong>08/17/2056</strong></span><br>
                                        <div class="history-note">
                                            <div>
                                                <div class="history-title">
                                                    <h4><i class="fa-duotone fa-note-sticky"></i>&nbsp;Liste des films a
                                                        télécharger</h4>
                                                </div>
                                                <div class="history-note-content">1-Harem 2-The
                                                    kraven 3-nipazor...</div>
                                            </div>
                                            <div class="action-note">
                                                <strong>.</strong><strong>.</strong><strong>.</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Sec-notes" style="margin:10px;" hidden>
                        <div class="title">
                            <div class="newan">
                                <h1>Mes <span class="pink">notes</span></h1>
                                <div
                                    style=" display: flex; flex-direction: row; justify-content: space-around; max-height: 45.6px; max-width: 119.49px;">
                                    <button class="newNot-btn" data-target="dropdown-new">
                                        <div>
                                            <span><i class="fa-duotone fa-plus-circle"></i></span>&nbsp;&nbsp;
                                            <span>Nouveau</span>&nbsp;
                                            <img src="assets/img/chevron1.png" width="11" alt="">
                                        </div>
                                    </button>
                                    <ul id="dropdown-new" class="dropdown-new" hidden>
                                        <li onclick="openCreateNoteModal()">Nouvelle Note</li>
                                        <li onclick="openCreateFolderModal()">Nouveau Dossier</li>
                                        <li>Vide</li>
                                    </ul>
                                </div>
                                <div class="tools">
                                    <span role="button" tabindex="0" title="Renommer"
                                        style="color:white; font-size:19px;" onclick="updade_folder()"><i
                                            class="fa-duotone fa-pencil"></i></span>
                                    <span role="button" tabindex="0" title="Copier les notes"
                                        style="color:white; font-size:19px;" onclick="copyNotes()"><i class="fa-duotone fa-copy"></i></span>
                                    <span role="button" tabindex="0" title="Couper les notes"
                                        style="color:white; font-size:19px;" onclick="cutNotes()"><i class="fa-duotone fa-cut"></i></span>
                                    <span role="button" tabindex="0" title="Coller les notes"
                                        style="color:white; font-size:19px;" onclick="pasteNotes()"><i class="fa-duotone fa-paste"></i></span>
                                    <span role="button" tabindex="0" title="Supprimer"><i
                                            style="color:white; font-size:19px;" class="fa-duotone fa-trash"></i></span>
                                </div>
                                <form id="jj" class="search-form" action="" method="get">
                                    <div class="search-div" style="background-color:whitesmoke; border-radius:12px; padding:4px;"><input
                                            type="search" name="search" id="search" placeholder="Rechercher"><i
                                            class="fa-duotone fa-search manip-2"></i></div>
                                </form>
                                <div class="alignements">
                                    <div role="button" tabindex="0" style="color:  white; font-size: 19px;"
                                        title="Petite icone" id="align-line" onclick="alignLine()" class="petit"><i
                                            class="fa-duotone fa-align-left"></i></div>
                                    <div role="button" tabindex="0" style="color:  white; font-size: 19px;"
                                        title="Grande icone" id="align-grand" onclick="alignGrand()" class="grands"><i
                                            class="fa-duotone fa-align-justify"></i>
                                    </div>
                                </div>
                                <div class="other">
                                    <div class="notif" role="button" tabindex="0"><i class="fa-duotone fa-bell"></i></div>
                                    <div class="profile" role="button" tabindex="0"><i class="fa-duotone fa-user-circle"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="SecPreviewNote" id="SecPreviewNote" hidden>
                            <div class="preview-container">
                                <div class="preview-header">
                                    <i onclick="closeNote()" class="fa-duotone fa-arrow-left"></i>&nbsp;&nbsp;
                                    <h4 style="display: inline;" id="Note-id-preview">Note ID: undefined</h4>
                                    <button class="modify_btn" id="modify_note_btn" onclick="switchToEditMode()">
                                        <i class="fa-duotone fa-pen"></i>&nbsp;Modifier
                                    </button>
                                </div>
                                <div class="preview-content" id="preview-note-content"></div>
                                <div class="preview-stats">
                                    <div>Mots: <span id="preview-word-count">0</span></div>
                                    <div>Caractères: <span id="preview-char-count">0</span></div>
                                </div>
                            </div>
                        </div>
                        <div id="Sec-OpenNote" title="Zone de modification d'une note" class="Sec-OpenNote" hidden>
                            <div
                                style="display: flex; flex-direction: row; justify-content: space-between; align-items:center;">
                                <div style="display: flex; flex-direction: row; align-items:center;">
                                    <i onclick="closeNote(888)" class="fa-duotone fa-arrow-left"></i>&nbsp;&nbsp;
                                    <h4 style="display: inline;" id="Note-id">Note Id: undefined</h4>
                                </div>
                                <button class="save_btn" id="save_note_btn" onclick="saveEditorContent()"><i
                                        class="fa-duotone fa-save"></i>&nbsp;Enregistrer</button>
                            </div>
                            <!-- <div class="note-text-Container">
                                <div class="NoteTools">&nbsp;&nbsp;&nbsp;

                                    <span onclick="formatText('bold')" title="Gras"><strong>B</strong></span>
                                    <span onclick="formatText('italic')" title="Italique" style="font-family: italic;">I</span>
                                    <span onclick="formatText('underline')" title="Souligné" style="text-decoration: underline;">U</span>
                                    <span onclick="insertBulletList()" title="Liste à puces"><i class="fas fa-list-ul"></i></span>
                                    <span onclick="insertNumberedList()" title="Liste numérotée"><i class="fas fa-list-ol"></i></span>
                                    <span onclick="insertCheckbox()" title="Case à cocher"><i class="fas fa-list-check"></i></span>
                                    <span onclick="insertQuote()" title="Citation">❝ Citation</span>
                                    <span onclick="toggleHeading()" title="Titre">H</span>
                                    <span onclick="duplicateLine()" title="Dupliquer la ligne">⎘ Dupliquer</span>
                                    <span onclick="deleteLine()" title="Supprimer la ligne">✕ Supprimer</span>
                                    <span onclick="moveLineUp()" title="Déplacer vers le haut"><i class="fas fa-arrow-up"></i></span>
                                    <span onclick="moveLineDown()" title="Déplacer vers le bas"><i class="fas fa-arrow-down"></i></span>
                                    <hr>
                                </div>
                                <textarea name="note" id="noteTextarea" placeholder="Votre note ici"></textarea>
                                <span class="TextLenght">Nombre de lettre: </span><span id="TextLenght"></span>|
                                Ligne: <span id="line-number">1</span> | Colonne: <span id="column-number">1</span>
                            </div> -->











                            <div class="editor-wrapper">
                                <div id="quill-toolbar">
                                    <span class="ql-formats">
                                        <select class="ql-header">
                                            <option selected></option>
                                            <option value="1">h1</option>
                                            <option value="2">h2</option>
                                            <option value="3">h3</option>
                                            <option value="4">h4</option>
                                        </select>
                                        <button class="ql-bold"></button>
                                        <button class="ql-italic"></button>
                                        <button class="ql-underline"></button>
                                        <button class="ql-code-block"></button>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-list" value="ordered"></button>
                                        <button class="ql-list" value="bullet"></button>
                                    </span>
                                    <span class="ql-formats">
                                        <button class="ql-clean"></button>
                                    </span>
                                </div>

                                <div id="quill-editor" style="min-height:340px; background:white;"></div>
                                <textarea id="noteTextarea" name="note" hidden></textarea>

                                <div class="status-bar">
                                    <div>Mots: <span id="word-count">0</span></div>
                                    <div>Caractères: <span id="char-count">0</span></div>
                                </div>
                            </div>
                        </div>
                        <div id="Sec-folder">
                            <div id="folder-info" hidden>
                                <i onclick="closeFolder(888)" class="fa-duotone fa-arrow-left"></i>&nbsp;&nbsp;
                                <h4 id="folder-name">Dossier ID: <code>Undefined7/</code></h4>
                            </div>
                            <div id="Sec-folders" hidden></div>
                            <!-- <p style="text-align:center;">Aucun fichier pour le moment ou une erreur s'est produite</p> -->
                        </div>
                        <div id="folders-container" class="folders-container">
                            <?php
                            include 'connect.php';
                            ?>
                            <?php
                            $listFolders = $con->query('SELECT * FROM folder');
                            while ($oneFolder = $listFolders->fetch()) {
                                ?>
                                <div id="<?php echo $oneFolder["id_folder"]; ?>" role="button" tabindex="0"
                                    title="Double cliquer pour ouvrir" class="folder line"
                                    ondblclick='openFolder("<?php echo $oneFolder["id_folder"]; ?>")' onkeydown="
                                    if (event.key === 'Enter' || event.key ===' ') { this.dispatchEvent(new Event('dblclick')); } else { this.click(); }      
                                    ">
                                    <div class="folder-details">
                                        <div class="folder-ico"><i class="fa-duotone fa-folder"></i></div>
                                        <div class="folder-name">
                                            <strong
                                                class="folderStrong_name"><?php echo $oneFolder['nom_folder']; ?></strong>
                                            <strong style="display: none;" class="folder_real_name"><?php echo $oneFolder['nom_folder']; ?></strong>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                            <!-- <div id="newfolder" title="Double cliquer pour ouvrir" class="folder line newfolder none">
                                <div class="folder-details">
                                    <div class="folder-ico"><i class="fa-duotone fa-folder"></i></div>
                                    <div class="folder-name">
                                        <form action=""><input placeholder="Nom du dossier" type="text"
                                                name="folderName" id="folderNameInput"></form>
                                    </div>
                                </div>
                                <div class="juuhb"> <strong>></strong> </div>
                            </div> -->
                        </div>
                    </div>
                    <script>
                        let folder_element = document.getElementById(folderId);
                        folder_element.addEventListener("keydown", (event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                event.target.dblclick();
                            }
                        })
                    </script>
                    <!-- Modal Nouvelle Note -->
                    <div id="createNoteModal" class="modal" hidden>
                        <div class="modal-content">
                            <span class="close" onclick="closeCreateNoteModal()">&times;</span>
                            <h2>Créer une nouvelle note</h2>
                            <input type="text" id="noteTitle" placeholder="Titre de la note">
                            <textarea id="noteContent" placeholder="Contenu de la note"></textarea>
                            <button onclick="submitNote()">Créer</button>
                        </div>
                    </div>

                    <!-- Modal Nouveau Dossier -->
                    <div id="createFolderModal" class="modal" hidden>
                        <div class="modal-content">
                            <span class="close" onclick="closeCreateFolderModal()">&times;</span>
                            <h2>Créer un nouveau dossier</h2>
                            <input type="text" id="folderTitle" placeholder="Nom du dossier">
                            <button onclick="submitFolder()">Créer</button>
                        </div>
                    </div>

                    <!-- Modal Modifier Dossier -->
                    <div id="updateFolderModal" class="modal" hidden>
                        <div class="modal-content">
                            <span class="close" onclick="closeUpdateFolderModal()">&times;</span>
                            <h2>Renormer un dossier</h2>
                            <input type="text" id="RefolderTitle" placeholder="Nom du dossier">
                            <button onclick="submitUpdateFolder()">Renommer</button>
                        </div>
                    </div>

                    <div id="Sec-prog" style="margin:10px;" hidden>
                        <div class="title">
                            <h1>Mes <span class="pink">programmes</span></h1>
                        </div>
                    </div>
                    <div id="Sec-cate" style="margin:10px;" hidden>
                        <div class="title">
                            <h1>Mes <span class="pink">categorie</span></h1>
                        </div>
                    </div>
                    <div id="Sec-para" style="margin:10px;" hidden>

                        \uf040\u{10f040}


                    </div>
                    <div style="margin-bottom: 100px;"></div>
                </div>
            </div>
        </div>
    </main>
    <script src="quill.min.js" defer></script>
    <script src="script.js" defer></script>
</body>

</html>