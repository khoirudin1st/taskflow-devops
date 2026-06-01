import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

      fetchTasks();
}, []);

  const fetchTasks = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data.tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);

  const createTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");

      fetchTasks();
    }
    catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/tasks/${editingId}`,
        {
          title,
          description,
          status: "TODO",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setEditingId(null);

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="container mt-4"v>
      <h1 className="mb-4">
        Task Dashboard 🚀
      </h1>
      <button
      className="btn btn-secondary"
      onClick={logout}>
        Logout
      </button>
      <p>
        Selamat datang di TaskFlow DevOps 🚀
      </p>

      <hr />
      <hr />

      <h2>Tambah Task</h2>

      <input
        className="form-control"
        type="text"
        placeholder="Judul Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        className="form-control"
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      {editingId ? (
      <button
        className="btn btn-primary"
        onClick={createTask}
      >
        Update Task
      </button>
      ) : (
      <button 
        className="btn btn-warning"
        onClick={createTask}>
        Tambah Task
      </button>
      )
      }

      <hr />

      <h2>Daftar Task</h2>
        {tasks.length === 0 ? (
          <p>Tidak ada task</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="card mb-3">
                <div className="card-body">
                  <strong>{task.title}</strong>

                  <br />

                  {task.description}

                  <br />

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setEditingId(task.id);
                      setTitle(task.title);
                      setDescription(task.description);
                    }}
                  >
                    Edit
                  </button>

                  {" "}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Hapus
                  </button>

                  <hr />
                </div>
              </div>
            ))}
          </ul>
        )}

      
    </div>
  );
}

export default Dashboard;