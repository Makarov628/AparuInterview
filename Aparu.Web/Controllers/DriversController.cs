using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Aparu.UseCases.Drivers.Dtos;

using Aparu.UseCases.Drivers.Commands.CreateDriver;
using Aparu.UseCases.Drivers.Commands.UpdateDriver;
using Aparu.UseCases.Drivers.Commands.DeleteDriver;

using Aparu.UseCases.Drivers.Queries.GetDriverById;
using Aparu.UseCases.Drivers.Queries.GetDriverList;
using Aparu.UseCases.Drivers.Queries.GetDriverListWithAuto;

namespace Aparu.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DriversController : ControllerBase
    {
        private readonly IMediator _mediator;
        public DriversController(IMediator mediator)
        {
            _mediator = mediator;
        }

        

        [HttpGet("{id}")]
        public async Task<Entities.Driver> Get(int id)
        {
            return await _mediator.Send(new GetDriverByIdQuery() { Id = id });
        }

        [HttpGet]
        public async Task<List<Entities.Driver>> GetList()
        {
            return await _mediator.Send(new GetDriverListQuery());
        }

        [HttpGet("with-auto")]
        public async Task<List<Entities.Driver>> GetListWithAuto()
        {
            return await _mediator.Send(new GetDriverListWithAutoQuery());
        }
        
        [HttpPost]
        public async Task<int> Create([FromBody] ChangeDriver dto)
        {
            return await _mediator.Send(new CreateDriverCommand() { Dto = dto });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ChangeDriver dto)
        {
            await _mediator.Send(new UpdateDriverCommand() { Id = id, Dto = dto });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _mediator.Send(new DeleteDriverCommand() { Id = id });
            return NoContent();
        }

    }
}
