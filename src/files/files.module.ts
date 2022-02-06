import { Module } from "@nestjs/common"
// service
import { FilesService } from "./files.service"


@Module({
    providers: [FilesService],
    exports: [FilesService]
})
export class FilesModule {}