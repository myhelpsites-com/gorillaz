export function HeaderTop() {
    return <header>
        <div className="bg-black text-center">
            <a className="navbar-brand text-light" href="#">
                <img src="/img/logo/logo.png" width={100} />
                <span className="text-danger"><br />Team FnZ</span>
            </a>
            <nav className="navbar navbar-expand-sm navbar-light">
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-items-center justify-content-center" id="collapsibleNavId">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>;
}