function intersection(a, b) {
    for (let name of a) {
        if (b.includes(name)) {
            return true;
        }
    }
    return false;
}

function filter_out(data, thrs) {
    var arr = []
    for (let i of data) {
        if (intersection(i['thr'], thrs)) {
            arr.push(i)
        }
    }
    return arr;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function add_fields() {
    var thrs = getCookie("chout").split(",").map((val) => parseInt(val))
    var l = filter_out(d, thrs);
    // console.log(l);

    const head_list = document.createElement('dl');
    for (let index = 0; index < l.length; index++) {
        const part = l[index];
        add_name(head_list, part['id']);
        add_description(head_list, part['name']);
    }
    document.querySelector(".container").appendChild(head_list);
}

function add_name(hl, text) {
    dt_el = document.createElement('dt');
    dt_el.classList.add("da");
    dt_el.textContent = text;
    hl.appendChild(dt_el);
}

function add_description(hl, text) {
    dd_el = document.createElement('dd');
    dd_el.classList.add("net");
    dd_el.textContent = text;
    hl.appendChild(dd_el);
}
