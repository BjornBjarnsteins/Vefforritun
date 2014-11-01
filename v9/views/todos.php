			<h1>ToDo</h1>

			<!--
				TODO:
					Birta villur, ef einhverjar
					Birta hlekk á þennan lista, með key settann, t.d. index.php?key=X
			-->

			<p><strong id="remaining"><?php /* TODO fjöldi búið */ ?></strong> af <strong id="total"><?php /* TODO heild */ ?></strong> eftir</p>
			<form class="form" id="form" method="post" action="index.php?key=<?php echo $key ?>">
				<ul class="todos" id="todos">
					<?php
					foreach (/* TODO sækja færslur */):
					?>
						<li class="<?php $todo->finished ?>">
							<label><input type="checkbox" value="finished" <?php echo $todo->finished ? 'checked="checked"' : '' ?> name="finished_<?php echo $todo->id; ?>"><?php echo $todo->title; ?></label>
							<label class="delete">Eyða <input type="checkbox" value="delete" name="delete_<?php echo $todo->id; ?>"></label>
						</li>
					<?php endforeach; ?>
				</ul>

				<input type="text" id="text" name="item" placeholder="nýtt atriði">
				<input type="submit" value="Vista stöðu">
			</form>
		</main>