using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aparu.Infrastructure.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Aparu.UseCases.Autos.Dtos;

using Aparu.UseCases.Autos.Commands.CreateAuto;
using Aparu.UseCases.Autos.Commands.UpdateAuto;
using Aparu.UseCases.Autos.Commands.DeleteAuto;

using Aparu.UseCases.Autos.Queries.GetAutoById;
using Aparu.UseCases.Autos.Queries.GetAutoList;
using Aparu.UseCases.Autos.Queries.GetAutoListWithDrivers;

namespace Aparu.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutosController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AutosController(IMediator mediator)
        {
            _mediator = mediator;
        }

        
        [HttpGet("{id}")]
        public async Task<Entities.Auto> Get(int id)
        {
            return await _mediator.Send(new GetAutoByIdQuery() { Id = id });
        }

        [HttpGet]
        public async Task<List<Entities.Auto>> GetList()
        {
            return await _mediator.Send(new GetAutoListQuery());
        }

        [HttpGet("with-drivers")]
        public async Task<List<Entities.Auto>> GetListWithAuto()
        {
            return await _mediator.Send(new GetAutoListWithDriversQuery());
        }
        
        [HttpPost]
        public async Task<int> Create([FromBody] ChangeAuto dto)
        {
            return await _mediator.Send(new CreateAutoCommand() { Dto = dto });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ChangeAuto dto)
        {
            await _mediator.Send(new UpdateAutoCommand() { Id = id, Dto = dto });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _mediator.Send(new DeleteAutoCommand() { Id = id });
            return NoContent();
        }

    }
}
