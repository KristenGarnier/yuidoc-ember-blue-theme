YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Base",
        "Cache",
        "Config",
        "Renders",
        "Ternary",
        "UtilisClass",
        "__",
        "diffDays",
        "domListenerCallback",
        "ifEqual",
        "momentify",
        "undoTraduction"
    ],
    "modules": [
        "Base",
        "Config",
        "Template",
        "Utils",
        "domListenerCallback"
    ],
    "allModules": [
        {
            "displayName": "Base",
            "name": "Base",
            "description": "Classe de point d'entrée pour l'application"
        },
        {
            "displayName": "Config",
            "name": "Config",
            "description": "Exportation des config pour l'app"
        },
        {
            "displayName": "domListenerCallback",
            "name": "domListenerCallback",
            "description": "Gestion des callback pour les listeners du DOM"
        },
        {
            "displayName": "Template",
            "name": "Template",
            "description": "Helper pour Handlebars adin de traduire les templates\n\nAttention les helbers handlebars doivent respecter une configuration très spéciale.\nEn effet, si la configuration n'est pas respectée le helper ne sera pas reconnu et l'application ne pourrra pas fonctionner correctement.\nLa configuration est :\n- Synthaxe ES5\n- Utilisation du CommonJS\n- Le nom du fichier doit être le nom de l'helper"
        },
        {
            "displayName": "Utils",
            "name": "Utils",
            "description": "Gestion du cache pour l'app"
        }
    ],
    "elements": []
} };
});