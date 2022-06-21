import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path'

import { DatabaseModule } from '../database/database.module';
import { ProductsResolver } from '../http/graphql/resolvers/products.resolver';
import { ProductsService } from '../services/products.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
        })
    ],
    providers: [ProductsResolver, ProductsService]
})
export class HttpModule {}
