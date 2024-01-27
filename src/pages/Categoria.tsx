import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, PlusCircle } from "lucide-react"

export default function Categoria() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold">Categoria</h1>

            <div className="flex items-center justify-between ">
                <form className="flex items-center gap-2">
                    <Input placeholder="ID da categoria" />
                    <Input placeholder="Nome da categoria" />
                    <Button type="submit" variant="link">
                        <Search className="m-4 h-4 mr-4" />Filtrar resultado</Button>
                </form>

                <Dialog>
                    <DialogTrigger>
                        <Button>
                            <PlusCircle className="h-4" />Nova Categoria</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Nova Categoria</DialogTitle>
                        <DialogDescription>Criar nova categoria no sistema</DialogDescription>
                        <DialogHeader>
                            <form className="space-y-3">
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label className="m-2">Categoria</Label>
                                    <Input className="col-span-3"></Input>
                                </div>
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label className="m-2">Descrição</Label>
                                    <Input className="col-span-3"></Input>
                                </div>
                            </form>

                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose>
                                <Button type="button" variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="border rounded-lg p-2">
                <Table>
                    <TableHeader>
                        <TableHead>Id</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Descrição</TableHead>
                    </TableHeader>
                    <TableBody>
                        {
                            Array.from({ length: 5 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{i}</TableCell>
                                        <TableCell>Categoria {i + 1}</TableCell>
                                        <TableCell>Descrição {i}</TableCell>
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