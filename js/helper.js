



function W(selector) {

    let obj;

    if (typeof selector == 'object') {
        obj = [selector]

    } else {
        obj = document.querySelectorAll(selector)
    }

    const self = {
        // this = obj.length === 1 ?obj[0] : obj;
        // add Html

        addHtml: function (html) {

            if (obj.length === 1) {

                return obj[0].innerHTML += html

            } else {

                obj.forEach(item => {

                    item.innerHTML += html

                })

                return this
            }


        },

        // addText
        addText: function (text) {
            if (obj.length === 1) {
                obj[0].textContent = text

                return this
            } else {
                obj.forEach(item => {

                    item.textContent += text
                })

                return this
            }

        },

        // css

        css: function (cssStyle) {

            if (obj.length === 1) {

                for (let key in cssStyle) {

                    obj[0].style[key] = cssStyle[key]
                }

                return this;

            } else {

                obj.forEach(item => {
                    for (let key in cssStyle) {
                        item.style[key] = cssStyle[key]
                    }
                })

                return this;
            }


        },

        // live 
        live: function (eventType, callback) {

            if (obj.length === 1) {

                obj[0].addEventListener(eventType, callback)

                return this;

            } else {

                obj.forEach(item => {

                    item.addEventListener(eventType, callback)

                })

                return this;
            }

        },

        // separate like each 


        separate: function (element, callback) {

            for (let i = 0; i < element.length; i++) {

                callback(i, element[i])

            }

        },

        // hide
        hide: function () {

            if (obj.length === 1) {

                obj[0].style.display = 'none'

                return this

            } else {
                obj.forEach(item => {

                    item.style.display = 'none'
                })

                return this
            }

        },


        show: function () {

            if (obj.length === 1) {

                obj[0].style.display = 'block'

                return this

            } else {
                obj.forEach(item => {

                    item.style.display = 'block'
                })

                return this
            }

        },


        // findNextSiblingsAll - select etdiyimiz elementden sonraki butun elementleri alir
        findNextAll: function (callback) {

            let nextSibling = document.querySelector(selector).nextElementSibling;

            let allNext = [];

            while (nextSibling) {

                if (nextSibling.tagName != 'SCRIPT') {
                    allNext.push(nextSibling);
                }

                nextSibling = nextSibling.nextElementSibling;
                obj = allNext

            }

            if (callback) {
                for (let i = 0; i < allNext.length; i++) {
                    callback(i, allNext[i])
                }
            }

            Object.assign(this, obj)

            return this

        },


        // findPrevSiblingsAll -select etdiyimiz elementden evvelki butun elementleri alir
        findPrevAll: function (callback) {


            let prevSibling = document.querySelector(selector).previousElementSibling;

            let allPrev = [];

            while (prevSibling) {
                if (prevSibling.tagName != 'SCRIPT') {
                    allPrev.push(prevSibling);
                }

                prevSibling = prevSibling.previousElementSibling;
                obj = allPrev
            }


            if (callback) {
                for (let i = 0; i < allNext.length; i++) {
                    callback(i, allNext[i])
                }
            }

            Object.assign(this, obj)

            return this
        },

        // setAttribute and getAttribute

        multiAttr: function (attr, attrValue) {

            let myItem = []

            if (attr && !attrValue) {
                obj.forEach(item => {

                    myItem.push(item.getAttribute(attr))

                })

                return myItem

            } else {

                obj.forEach(item => {

                    item.setAttribute(attr, attrValue)

                })

                return this;
            }

        },


        // delete specific element in array

        delFromArray: function (array, deletedItem) {


            for (let i = 0; i < deletedItem.length; i++) {

                const deleted = array.indexOf(deletedItem[i]);

                if (deleted > -1) {
                    array.splice(deleted, 1)
                }
            }


            return this;

        },


        // width

        width: function () {

            return clientWidth

        },



        // height

        height: function () {

            return clientHeight

        },

        // appendItem

        append: function (html) {

            if (obj.length === 1) {
                console.log(obj.length)

                obj[0].innerHTML += html

                return this

            } else {

                obj.forEach(item => {

                    item.innerHTML += html

                })

                return this
            }


        },

        // click


        click: function (callback) {

            if (obj.length === 1) {

                obj[0].addEventListener('click', callback)

                return this;

            } else {

                obj.forEach(item => {

                    item.addEventListener('click', callback)

                })

                return this;
            }

        },


        // hover
        hover: function (callback) {

            if (obj.length === 1) {

                obj[0].addEventListener('mouseenter', callback)

                return this;

            } else {

                obj.forEach(item => {

                    item.addEventListener('mouseenter', callback)

                })

                return this;
            }

        },


        // mouse leave
        leaveMouse: function (callback) {

            if (obj.length === 1) {

                obj[0].addEventListener('mouseleave', callback)

                return this;

            } else {

                obj.forEach(item => {

                    item.addEventListener('mouseleave', callback)

                })

                return this;
            }

        },

        // subside


        moveUp: function (interval, callback) {

            let selfHeight = obj[0].clientHeight;

            if (obj.length === 1) {


                obj[0].style.height = '0px'
                obj[0].style.transition = 'all ' + (interval * 0.001) + 's'

                if (callback) {
                    callback()
                }

                return this;

            } else {

                obj.forEach(item => {


                    item.style.transition = 'all ' + (interval * 0.001) + 's';
                    item.style.height = '0px';

                })

                if (callback) {
                    callback()
                }

                return this;
            }

        },

        // down
        moveDown: function (interval, callback) {
            if (obj.length === 1) {

                obj[0].style.height = '';
                obj[0].style.transition = 'all ' + (interval * 0.001) + 's'

                if (callback) {
                    callback()
                }

                return this;

            } else {
                obj.forEach(item => {

                    item.style.transition = 'all ' + (interval * 0.001) + 's';
                    item.style.height = '';
                })


                if (callback) {
                    callback()
                }

                return this;
            }

        },

        // multiMove
        toggleMove: function (interval, callback) {
            if (obj.length === 1) {
                if (document.querySelector(`${selector}`).clientHeight != 0) {
                    obj[0].style.transition = 'all ' + (interval * 0.001) + 's';
                    obj[0].style.height = '0px';



                } else {
                    obj[0].style.transition = 'all ' + (interval * 0.001) + 's';
                    obj[0].style.height = '';
                }

                if (callback) {
                    callback()
                }

                return this;

            } else {
                obj.forEach(item => {

                    let newHeight = item.clientHeight;

                    if (item.clientHeight != 0) {
                        item.style.transition = 'all ' + (interval * 0.001) + 's';
                        item.style.height = '0px';

                    } else {

                        item.style.transition = 'all ' + (interval * 0.001) + 's';
                        item.style.height = '';
                    }

                })



                if (callback) {
                    callback()
                }

                return this;
            }

        },


        // slider
        slider: function (interval, autoplay) {
            let index = 0;

            if (obj.length !== 1 || obj.length === 1) {

                obj[0].classList.add('helperSlide')

                let slideWrapper = obj[0];

                let slideItem = document.querySelectorAll(`${selector} > div`);

                let slideButtonWrapper = document.createElement('div');
                slideButtonWrapper.classList.add('sliderWrap');

                // left btn

                let slideButtonLeft = document.createElement('button');
                slideButtonLeft.classList.add('btn-prev');
                slideButtonLeft.style.cursor = 'pointer';


                slideButtonLeft.innerHTML += '<';

                // left btn


                // right btn

                let slideButtonRight = document.createElement('button');
                slideButtonRight.classList.add('btn-next');
                slideButtonRight.style.cursor = 'pointer';

                slideButtonRight.innerHTML += '>';

                // right btn

                // < ------------------------------------------------------- >

                // append button

                slideButtonWrapper.appendChild(slideButtonLeft)
                slideButtonWrapper.appendChild(slideButtonRight)

                // append button end

                // < ------------------------------------------------------- >

                // append wrapper to sliderBox

                slideWrapper.appendChild(slideButtonWrapper)

                // append wrapper to sliderBox end



                // slide play

                slideItem.forEach(slideItem => {
                    slideItem.style.display = 'none'
                    slideItem.style.opacity = '0'
                    slideItem.style.transition = 'all ' + (interval * 0.001) + 's';

                })


                let opacityIndex = 0

                function next() {

                    let itemIndex = document.querySelectorAll(`${selector} > div`)[index]

                    slideItem.forEach(slideItem => {
                        slideItem.style.display = 'none';
                        slideItem.style.opacity = '0';
                        slideItem.querySelector('img').classList.add('transformAdd');
                        itemIndex.querySelector('img').classList.remove('transformClear');


                    })

                    itemIndex.style.display = 'block'
                    itemIndex.style.transition = 'all ' + (interval * 0.001) + 's';

                    let intervalOpacity = setInterval(function () {

                        opacityIndex += 100

                        itemIndex.style.transition = 'all ' + (interval * 0.001) + 's';

                        itemIndex.style.opacity = opacityIndex;

                        itemIndex.querySelector('img').classList.remove('transformAdd');
                        itemIndex.querySelector('img').classList.add('transformClear');

                        if (opacityIndex >= 1000) {
                            clearInterval(intervalOpacity, 10)
                            opacityIndex = 0
                        }

                    }, (interval * 0.001))


                }

                next()

                // next slide


                // prev slide

                function prev() {

                    let itemIndex = document.querySelectorAll(`${selector} > div`)[index]

                    slideItem.forEach(slideItem => {
                        slideItem.style.display = 'none'
                        slideItem.style.opacity = '0'
                        slideItem.querySelector('img').classList.add('transformAdd');
                        itemIndex.querySelector('img').classList.remove('transformClear');
                    })

                    itemIndex.style.display = 'block'
                    itemIndex.style.transition = 'all ' + (interval * 0.001) + 's';

                    let intervalOpacity = setInterval(function () {

                        opacityIndex += 100

                        itemIndex.style.transition = 'all ' + (interval * 0.001) + 's';

                        itemIndex.style.opacity = opacityIndex;
                        itemIndex.querySelector('img').classList.remove('transformAdd');
                        itemIndex.querySelector('img').classList.add('transformClear');

                        if (opacityIndex >= 1000) {
                            clearInterval(intervalOpacity, 10)
                            opacityIndex = 0
                        }

                    }, (interval * 0.001))

                }

                prev()


                slideButtonRight.onclick = function () {

                    if (index < slideItem.length - 1) {
                        index++
                        setTimeout(function () {
                            next()
                        }, 500)
                    } else {
                        index = 0
                        setTimeout(function () {
                            next()
                        }, 500)
                    }
                }


                slideButtonLeft.onclick = function () {

                    if (index != 0) {
                        index--
                        setTimeout(function () {
                            prev()
                        }, 500)
                    } else {
                        index = slideItem.length - 1
                        setTimeout(function () {
                            prev()
                        }, 500)
                    }

                }

                // autoplay
                if (autoplay && autoplay.autoplay == true) {
                    setInterval(function () {
                        if (index < slideItem.length - 1) {
                            index++
                            setTimeout(function () {
                                next()
                            }, 500)

                        } else {
                            index = 0
                            setTimeout(function () {
                                next()
                            }, 500)
                        }
                    }, autoplay.interval)
                }

            }

            return this
        },

        find: function (findItem) {
            if (obj.length === 1) {
                obj = document.querySelector(selector).querySelectorAll(`${findItem}`);
            }


            Object.assign(this, obj)

            return this
        }

    }


    return self;

}



const HELPER = new W();


