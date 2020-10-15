using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRSample
{
    public class MessageHub : Hub
    {
        public async Task ChatMessage(string name, string message)
        {
            await base.Clients.All.SendAsync("Broadcast", name, message);
        }
    }
}
