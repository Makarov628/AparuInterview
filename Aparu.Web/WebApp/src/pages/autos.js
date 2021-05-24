import React, { useEffect, useState } from 'react'
import M from 'materialize-css';


const Autos = () => {

    const [autos, setAutos] = useState([]);
    const [currentAuto, setCurrentAuto] = useState({});
    const [modal, setModal] = useState(null);
    const [changeMode, setChangeMode] = useState(null);

    const defaultAuto = {
        brand: null,
        model: null
    }

    const getAutos = () => {
        setAutos([])

        fetch("/Autos/with-drivers")
            .then(resp => resp.json())
            .then(data => setAutos(data))
            .catch(console.log)
    }

    const createAuto = (data) => {
        fetch("/Autos", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.text())
            .then(data => {
                getAutos()
                closeDialog()
            })
            .catch(err => console.log)
    }

    const updateAuto = (id, data) => {
        fetch(`/Autos/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
          })
            .then(resp => resp.text())
            .then(data => {
                getAutos()
                closeDialog()
            })
            .catch(err => console.log)
    }

    const deleteAuto = (id) => {
        fetch(`/Autos/${id}`, {
            method: "DELETE"
          })
            .then(resp => resp.text())
            .then(data => {
                getAutos()
            })
            .catch(err => console.log)
    }

    const saveAuto = () => {
        const data = {
            brand: currentAuto.brand,
            model: currentAuto.model
        }

        if (changeMode == 'create') {
            createAuto(data)
        } else if (changeMode == 'update') {
            updateAuto(currentAuto.id, data)
        }
    }

    const openDialog = (index, mode) => {

        setChangeMode(mode)
        if (index !== null) {
            setCurrentAuto(autos[index])
        }

        modal.open()
    }


    const closeDialog = () => {
        modal.close()
    }


    useEffect(() => {
        const modalElement = document.querySelector("div.modal.changeAuto")
        M.Modal.init(modalElement, {
            dismissible: false,
            onCloseEnd: (el) => {
                setCurrentAuto(defaultAuto)
                setChangeMode(null);
            }
        })

        const modalInstance = M.Modal.getInstance(modalElement)
        setModal(modalInstance)

        getAutos()
    }, [])

    return (
        <>
            <h3>
                <span>Автомобили</span>
                <span>&nbsp;&nbsp;</span>
                <a
                    onClick={() => openDialog(null, 'create')}
                    class="btn btn-floating orange"
                >
                    <i class="material-icons">add</i>
                </a>
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Бренд</th>
                        <th>Модель</th>
                        <th>Водители</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autos.map((auto, index) =>
                            <tr>
                                <td>{auto.brand}</td>
                                <td>{auto.model}</td>
                                <td>
                                    {auto.drivers.length > 0 ?
                                        auto.drivers.map(driver =>
                                            <>
                                                <span class="new badge orange" data-badge-caption="">{driver.name}</span>
                                                <span>&nbsp;</span>
                                            </>
                                        )
                                        : null
                                    }
                                </td>
                                <td>
                                    <a
                                        key={`edit_${auto.id}`}
                                        onClick={() => openDialog(index, 'update')}
                                        class="btn btn-floating orange"
                                    >
                                        <i class="material-icons">edit</i>
                                    </a>

                                    <span>&nbsp;&nbsp;</span>

                                    <a onClick={() => deleteAuto(auto.id)} class="btn btn-floating red"><i class="material-icons">delete</i></a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div class="modal changeAuto ">
                <div class="modal-content">
                    <h4>
                        {changeMode == "create" ? "Создать" : "Изменить"} машину
                    </h4>
                    <br />
                    <div className="row">
                        <div class="input-field col s12 ">
                            <input
                                placeholder="Введите бренд машины"
                                id="driver_name"
                                type="text"
                                value={currentAuto.brand || ""}
                                class="validate"
                                onChange={(el) => {
                                    setCurrentAuto({ ...currentAuto, brand: el.target.value })
                                }}
                            />
                            <label for="driver_name">Бренд</label>
                        </div>

                        <div class="input-field col s12 ">
                            <input
                                placeholder="Введите модель машины"
                                id="driver_name"
                                type="text"
                                value={currentAuto.model || ""}
                                class="validate"
                                onChange={(el) => {
                                    setCurrentAuto({ ...currentAuto, model: el.target.value })
                                }}
                            />
                            <label for="driver_name">Модель</label>
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <a onClick={closeDialog} class="btn btn-flat">Закрыть</a>
                    <a onClick={saveAuto} class={`btn orange ${!currentAuto.brand && !currentAuto.model ? "disabled" : ""}`}>{changeMode == "create" ? "Создать" : "Изменить"}</a>
                </div>
            </div>
        </>
    )
}

export default Autos