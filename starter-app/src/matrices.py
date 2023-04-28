import tkinter as tk

class MatrixGUI:
    def __init__(self, master):
        self.master = master
        master.title("Matrices")

        self.label1 = tk.Label(master, text="Matriz A:")
        self.label1.grid(row=0, column=0)

        self.label2 = tk.Label(master, text="Matriz B:")
        self.label2.grid(row=0, column=2)

        self.entry_list_A = []
        self.entry_list_B = []

        for i in range(3):
            for j in range(3):
                e = tk.Entry(master, width=5)
                e.grid(row=i+1, column=j)
                self.entry_list_A.append(e)

                e = tk.Entry(master, width=5)
                e.grid(row=i+1, column=j+2)
                self.entry_list_B.append(e)

        self.add_button = tk.Button(master, text="+", command=self.add_matrices)
        self.add_button.grid(row=4, column=1)

        self.subtract_button = tk.Button(master, text="-", command=self.subtract_matrices)
        self.subtract_button.grid(row=4, column=3)

    def add_matrices(self):
        A = [[float(e.get()) for e in self.entry_list_A[i*3:i*3+3]] for i in range(3)]
        B = [[float(e.get()) for e in self.entry_list_B[i*3:i*3+3]] for i in range(3)]
        C = [[A[i][j] + B[i][j] for j in range(3)] for i in range(3)]
        self.show_result(C)

    def subtract_matrices(self):
        A = [[float(e.get()) for e in self.entry_list_A[i*3:i*3+3]] for i in range(3)]
        B = [[float(e.get()) for e in self.entry_list_B[i*3:i*3+3]] for i in range(3)]
        C = [[A[i][j] - B[i][j] for j in range(3)] for i in range(3)]
        self.show_result(C)

    def show_result(self, matrix):
        result_window = tk.Toplevel(self.master)

        for i in range(3):
            for j in range(3):
                e = tk.Entry(result_window, width=5)
                e.grid(row=i, column=j)
                e.insert(0, str(matrix[i][j]))

root = tk.Tk()
my_gui = MatrixGUI(root)
root.mainloop()