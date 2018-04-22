const netlifyIdentity = require("netlify-identity-widget");

export default (ctx, inject) => {

    // netlifyIdentity.init();

    ctx.$netlifyIdentity = netlifyIdentity;
    inject("netlifyIdentity", netlifyIdentity);

    ctx.$netlifyIdentity.init();
};