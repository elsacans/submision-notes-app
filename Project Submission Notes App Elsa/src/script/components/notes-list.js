import Utils from '../utils.js';

class NotesList extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    
    _notes = {
        id: "NEED_ID",
        title: "NEED_TITLE",
        body: "NEED_BODY",
        createdAt: "NEED_CREATED_AT",
        
    };

    constructor() {
        super();

        this._shadowRoot =this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
        
        this.render();
    }
    
    setnotesData (value) {
        this._notes["id"] = value.id;
        this._notes["title"] = value.title;
        this._notes["body"] = value.body;
        this._notes["createdAt"] = value.createdAt;

        this.render();
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

        .popup-box {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
        background: rgba(0, 0, 0, 0.1);
        }

        .popup-box .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        max-width: 400px;
        width: 100%;
   
        justify-content: center;
        transform: translate(-50%, -50%);
        }

        .popup-box, .popup-box .popup {
        opacity: 0;
        pointer-events: none;
        transition: all 0.25s ease;
        }

        .popup-box.show, .popup-box.show .popup {
        opacity: 1;
        pointer-events: auto;
        }

        .popup .content {
        width: calc(100% - 15px);
        background: #FFF8DB;
        border-radius: 5px;
        }

        .popup .content header {
        padding: 15px;
        border-bottom: 1px solid #ccc;
        }

        .content header p{
        font-size: 20px;
        font-weight: 500;
        }

        .content header i {
        color: #304463;
        cursor: pointer;
        font-size: 23px;
        }

        .content form {
        margin: 15px 25px 35px;
        }

        .content form .row {
        margin-bottom: 20px;
        }

        form .row label {
        display: block;
        font-size: 12px;
        margin-bottom: 6px;
        }

        .content form :where(input, textarea) {
        width: 100%;
        height: 50px;
        outline: none;
        font-size: 17px;
        padding: 0 15px;
        border-radius: 4px;
        border: 1px solid #999;
        }

        .content form textarea {
        height: 150px;
        resize: none;
        padding: 8px 15px;
        }

        .content form button {
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        color: #ffff;
        cursor: pointer;
        font-size: 16px;
        border-radius: 4px;
        background: #7D8ABC;

        }
        `;
    }

    render(){
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <div class="popup-box">
                <div class="popup">
                    <div class="content">
                        <header>
                            <p>Add a new Note</p>
                            <i class="bi bi-calendar-x-fill"></i>
                        </header>
                    <form action="#">
                        <div class="row-title">
                            <label>Title</label>
                            <input type="text">
                        </div>
                        <div class="row-description">
                            <label>Description</label>
                            <textarea></textarea>
                        </div>
                        <button>Add Note</button>
                    </form>
                </div>
            </div>
        
        `;
    }
}

customElements.define('notes-list', NotesList);
