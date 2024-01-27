import { Button } from "./components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Search, PlusCircle } from 'lucide-react'
export function App() {

  return (
    <div className="p-6 max-w-4xl mx-auto  space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do produto"></Input>
          <Input name="name" placeholder="Nome do produto"></Input>
          <Button type="submit" variant="link">
            <Search className="m-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger>
            <Button>
              <PlusCircle className="h-4 mr-2" />
              Novo Produto
            </Button>

          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
              <form className="space-y-6">
                <div className="grid grid-cols-4 items-center text-right gab-3">
                  <Label htmlFor="name" className="m-2">Produto</Label>
                  <Input className="col-span-3" id="name" placeholder="Nome do produto" />
                </div>
                <div className="grid grid-cols-4 items-center text-right gab-3">
                  <Label htmlFor="price" className="m-2">Preço</Label>
                  <Input className="col-span-3" id="price" placeholder="Preço" />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>

              </form>
            </DialogHeader>
          </DialogContent>

        </Dialog>

      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {
              Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>Prod {i + 1}</TableCell>
                    <TableCell>R$ {i + 1},00</TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
      </div>
    </div>
  )
}
