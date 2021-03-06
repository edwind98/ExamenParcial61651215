import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Categoria} from '../models';
import {CategoriaRepository} from '../repositories';

export class CategoriaController {
  constructor(
    @repository(CategoriaRepository)
    public categoriaRepository : CategoriaRepository,
  ) {}

  @post('/categorias', {
    responses: {
      '200': {
        description: 'Categoria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Categoria)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {
            title: 'NewCategoria',
            
          }),
        },
      },
    })
    categoria: Categoria,
  ): Promise<Categoria> {
    return this.categoriaRepository.create(categoria);
  }

  @get('/categorias/count', {
    responses: {
      '200': {
        description: 'Categoria model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Categoria) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.categoriaRepository.count(where);
  }

  @get('/categorias', {
    responses: {
      '200': {
        description: 'Array of Categoria model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Categoria, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Categoria) filter?: Filter<Categoria>,
  ): Promise<Categoria[]> {
    return this.categoriaRepository.find(filter);
  }

  @patch('/categorias', {
    responses: {
      '200': {
        description: 'Categoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {partial: true}),
        },
      },
    })
    categoria: Categoria,
    @param.where(Categoria) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.categoriaRepository.updateAll(categoria, where);
  }

  @get('/categorias/{id}', {
    responses: {
      '200': {
        description: 'Categoria model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Categoria, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Categoria, {exclude: 'where'}) filter?: FilterExcludingWhere<Categoria>
  ): Promise<Categoria> {
    return this.categoriaRepository.findById(id, filter);
  }

  @patch('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {partial: true}),
        },
      },
    })
    categoria: Categoria,
  ): Promise<void> {
    await this.categoriaRepository.updateById(id, categoria);
  }

  @put('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoria: Categoria,
  ): Promise<void> {
    await this.categoriaRepository.replaceById(id, categoria);
  }

  @del('/categorias/{id}', {
    responses: {
      '204': {
        description: 'Categoria DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoriaRepository.deleteById(id);
  }

  @get('/categorias/vista1')
  async vista1(): Promise<any> {
    let datos: any[] = await this.getVista();
    
    return datos;
  }

  async getVista(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM transaccion');
  }

  @get('/categorias/vista2')
  async vista2(): Promise<any> {
    let datos: any[] = await this.getVista2();
    
    return datos;
  }

  async getVista2(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM transaccion_cli ');
  }
  @get('/categorias/vista3')
  async vista3(): Promise<any> {
    let datos: any[] = await this.getVista3();
    
    return datos;
  }

  async getVista3(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM ventaProductos ');
  }
  @get('/categorias/vista4')
  async vista4(): Promise<any> {
    let datos: any[] = await this.getVista4();
    
    return datos;
  }

  async getVista4(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM PagosClientes ');
  }
  @get('/categorias/vista5')
  async vista5(): Promise<any> {
    let datos: any[] = await this.getVista5();
    
    return datos;
  }

  async getVista5(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM Productos ');
  }

  @get('/categorias/trigger')
  async trigger(): Promise<any> {
    let datos: any[] = await this.gettrigger();
    
    return datos;
  }

  async gettrigger(){
    return await this.categoriaRepository.dataSource.execute('SELECT * FROM ActInv ');
  }
}
