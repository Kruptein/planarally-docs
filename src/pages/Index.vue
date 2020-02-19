<template>
    <Layout>
        <Section dots="true">
            <div class="mb-x2 container-sm text-center">
                <Logo class="logo-index" />
                <h1>Welcome</h1>
                <p>
                    PlanarAlly is an opensource Virtual TableTop (VTT) web tool
                    that aims to help you and your players discover the various
                    fictive worlds out there. It's designed to be usable without
                    any internet access to accomodate your dark dungeons and has
                    a variety of features to enhance your immersion like
                    lighting and vision limitation.
                </p>
                <p>
                    This website is still very barebones currently, but I hope
                    to make work of fleshing out the content here in the near
                    future to make sure everything is clear. If anything is
                    unclear feel free to reach out to me via email or social
                    media!
                </p>
                <p>
                    <i>Happy dungeoneering!</i>
                </p>
            </div>
        </Section>
    </Layout>
</template>

<script>
import Logo from "~/assets/images/pa-logo.svg";
export default {
    components: {
        Logo
    },
    metaInfo: {
        title: "Home"
    }
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}

.logo-index {
    height: 200px;
    margin-bottom: 20px;
}
</style>
