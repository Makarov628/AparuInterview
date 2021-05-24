import React, { useEffect, useState } from 'react'
import M from 'materialize-css';

const Drivers = () => {

  const [autos, setAutos] = useState([]);

  const [drivers, setDrivers] = useState([]);
  const [currentDriver, setCurrentDriver] = useState({});
  const [modal, setModal] = useState(null);
  const [changeMode, setChangeMode] = useState(null);

  const defaultDriver = {
    ...currentDriver,
    id: null,
    name: null,
    autoId: null,
    auto: null
  }

  const getDrivers = () => {
    setDrivers([])

    fetch("/Drivers/with-auto")
      .then(resp => resp.json())
      .then(data => setDrivers(data))
      .catch(console.log)
  }

  const getAutos = () => {
    return fetch("/Autos")
      .then(resp => resp.json())
      .then(data => setAutos(data))
      .catch(console.log)
  }

  const createDriver = (data) => {
    fetch("/Drivers", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.text())
      .then(data => {
        getDrivers()
        closeDialog()
      })
      .catch(err => console.log)
  }

  const updateDriver = (id, data) => {
    fetch(`/Drivers/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.text())
      .then(data => {
        getDrivers()
        closeDialog()
      })
      .catch(err => console.log)
  }

  const deleteDriver = (id) => {
    fetch(`/Drivers/${id}`, { method: "DELETE" })
      .then(resp => resp.text())
      .then((data) => getDrivers())
      .catch(console.log)
  }

  const saveDriver = () => {
    const data = {
      name: currentDriver.name,
      autoId: currentDriver.autoId
    }

    if (changeMode == 'create') {
      createDriver(data)
    } else if (changeMode == 'update') {
      updateDriver(currentDriver.id, data)
    }
  }

  const openDialog = (index, mode) => {

    setChangeMode(mode)
    if (index !== null) {
      setCurrentDriver(drivers[index])
    }

    getAutos().then(() =>
      modal.open()
    );
  }

  const closeDialog = () => {
    setAutos([])
    modal.close()
  }

  useEffect(() => {
    const modalElement = document.querySelector("div.modal.changeDriver")
    M.Modal.init(modalElement, {
      dismissible: false,
      onCloseEnd: (el) => {
        setCurrentDriver(defaultDriver)
        setChangeMode(null);
      }
    })

    const modalInstance = M.Modal.getInstance(modalElement)
    setModal(modalInstance)

    const selectElement = document.querySelector("select.auto-select")
    M.FormSelect.init(selectElement);

    getDrivers()
  }, [])

  return (
    <div className="row">
      <h3>
        <span>Водители</span>
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
            <th>Имя</th>
            <th>Машина</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {
            drivers.map((driver, index) =>
              <tr key={`tr${driver.id}`}>
                <td key={`td1_${driver.id}`}>{driver.name}</td>
                <td key={`td2_${driver.id}`}>
                  {driver.auto ?
                    <span class="new badge orange" data-badge-caption="">
                      {driver.auto.brand} {driver.auto.model}
                    </span>
                    : null
                  }
                </td>
                <td key={`td3_${driver.id}`}>
                  <a
                    key={`edit_${driver.id}`}
                    onClick={() => openDialog(index, 'update')}
                    class="btn btn-floating orange"
                  >
                    <i class="material-icons">edit</i>
                  </a>

                  <span>&nbsp;&nbsp;</span>

                  <a onClick={() => deleteDriver(driver.id)} class="btn btn-floating red"><i class="material-icons">delete</i></a>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      <div class="modal changeDriver ">
        <div class="modal-content">
          <h4>
            {changeMode == "create" ? "Создать" : "Изменить"} машину
          </h4>
          <br />
          <div className="row">
            <div class="input-field col s12 ">
              <input
                placeholder="Введите имя водителя"
                id="driver_name"
                type="text"
                value={currentDriver.name || ""}
                class="validate"
                onChange={(el) => {
                  setCurrentDriver({ ...currentDriver, name: el.target.value })
                }}
              />
              <label for="driver_name">Имя</label>
            </div>

            <div class="input-field col s12">
              <label for="auto-select">Машина</label>
              <br/>
              <br/>
              <select
                class="auto-select browser-default"
                id="auto-select"
                onChange={(el) =>
                  setCurrentDriver({ ...currentDriver, autoId: parseInt(el.target.value) })
                }
              >
                <option value="">Без машины</option>
                {
                  autos.map(auto =>
                    <option selected={auto.id === currentDriver.autoId} value={auto.id}>{auto.brand} {auto.model}</option>
                  )
                }
              </select>

            </div>

          </div>
        </div>
        <div class="modal-footer">
          <a onClick={closeDialog} class="btn btn-flat">Закрыть</a>
          <a onClick={saveDriver} class={`btn orange ${!currentDriver.name ? "disabled" : ""}`}>{changeMode == "create" ? "Создать" : "Изменить"}</a>
        </div>
      </div>
    </div>
  )
}

export default Drivers