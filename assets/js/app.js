const nav = () => {
    const nav = document.querySelector(".js-nav");
    const navLinks = nav.querySelectorAll(".nav__link");
    const slideRect = nav.querySelector(".nav__slider-rect");

    nav.addEventListener("click", (evt) => {
        if (!evt.target.classList.contains("nav__link")) {
            return;
        }
        evt.preventDefault();

        navLinks.forEach((item) => {
            item.classList.remove("nav__link_active");
        });

        if (!evt.target.classList.contains("nav__link_active")) {
            evt.target.classList.add("nav__link_active");
        }

        slideRect.style.transform = `translateX(${evt.target.dataset.transform}%)`;
    });
};
nav();

const nav2 = () => {
    const nav = document.querySelector(".js-nav2");
    const navLinks = nav.querySelectorAll(".nav__link");
    const slideRect = nav.querySelector(".nav__slider-rect");

    let activeNavLinkIndex = 0;

    nav.addEventListener("click", (evt) => {
        if (!evt.target.classList.contains("nav__link")) {
            return;
        }

        evt.preventDefault();

        navLinks.forEach((item) => {
            item.classList.remove("nav__link_active");
        });

        let nextIndex = -1;

        if (!evt.target.classList.contains("nav__link_active")) {
            evt.target.classList.add("nav__link_active");

            nextIndex = [...navLinks].findIndex((navLink) => {
                return navLink === evt.target;
            });
        }

        const parentPos = nav.getBoundingClientRect();
        const childPos = evt.target.getBoundingClientRect();
        const relativePos = {};

        relativePos.right = childPos.right - parentPos.right;
        relativePos.left = childPos.left - parentPos.left;

        if (nextIndex > activeNavLinkIndex) {
            slideRect.style.right = `${Math.abs(relativePos.right)}px`;

            setTimeout(() => {
                slideRect.style.left = `${relativePos.left}px`;
            }, 250);
        } else {
            slideRect.style.left = `${relativePos.left}px`;

            setTimeout(() => {
                slideRect.style.right = `${Math.abs(relativePos.right)}px`;
            }, 250);
        }

        activeNavLinkIndex = nextIndex;
    });
};
nav2();

