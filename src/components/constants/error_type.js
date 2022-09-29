const error = [
    {
        code: "api_key_required",
        value: "Clé API requis",
        type: 401
    },
    {
        code: "api_key_invalid",
        value: "Clé API invalide",
        type: 401
    },
    {
        code:"merchant_disabled",
        value:"Votre compte marchand est inactif ou n'a pas encore été vérifié",
        type: 401
    },
    {
        code:"missing_merchant_data",
        value:"ID MARCHAND MANQUANT",
        type: 400
    },
    {
        code:"merchant_not_found",
        value:"Marchand introuvable",
        type: 400
    },
    {
        code:"transaction_code_already_exists",
        value:"Une erreur est survenue veuillez réessayer",
        type: 400
    },
    {
        code:"country_not_found",
        value:"Une erreur est survenue veuillez réessayer",
        type: 400
    },
    {
        code:"invalid_value",
        value:"La valeur pin est invalide",
        type: 400
    },
]

export {
    error
}